import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'

// Fix SSL certificate verification issue on some Windows/Node.js setups
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

// Configure Cloudinary instance if credentials exist
const hasCloudinary = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
)

if (hasCloudinary) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })
}

const FOLDER_NAME = 'portfolio-gallery'
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')

function ensureUploadsDir() {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true })
  }
}

/**
 * Upload an image buffer to Cloudinary (or local public/uploads if credentials not provided).
 * @param {Buffer|Uint8Array} fileBuffer
 * @param {string} fileName
 * @param {string} mimeType
 * @returns {Promise<{id: string, name: string, url: string}>}
 */
export async function uploadImage(fileBuffer, fileName, mimeType) {
  const ext = fileName.includes('.') ? fileName.split('.').pop() : 'jpg'
  const cleanBase = fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_')
  const uniqueName = `${cleanBase}_${Date.now()}.${ext}`

  if (hasCloudinary) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: FOLDER_NAME,
          public_id: `${cleanBase}_${Date.now()}`,
          resource_type: 'image',
          overwrite: true,
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error)
            return reject(new Error(error.message || 'Cloudinary upload failed'))
          }
          resolve({
            id: result.public_id,
            name: fileName,
            url: result.secure_url,
          })
        }
      )
      uploadStream.end(Buffer.from(fileBuffer))
    })
  }

  // Fallback: Simpan ke folder lokal public/uploads/
  ensureUploadsDir()
  const filePath = path.join(UPLOADS_DIR, uniqueName)
  await fs.promises.writeFile(filePath, Buffer.from(fileBuffer))

  return {
    id: `local_${uniqueName}`,
    name: uniqueName,
    url: `/uploads/${uniqueName}`,
  }
}

/**
 * List all uploaded images (merges Cloudinary and local uploads).
 * @returns {Promise<Array<{id: string, name: string, mimeType: string, thumbnailLink: string, createdTime: string, url: string}>>}
 */
export async function listImages() {
  const images = []
  const seenNames = new Set()

  // 1. Ambil dari Cloudinary jika kredensial aktif (prioritas cloud)
  if (hasCloudinary) {
    try {
      const result = await cloudinary.api.resources({
        type: 'upload',
        prefix: FOLDER_NAME,
        max_results: 100,
      })

      const cldImages = (result.resources || []).map((resource) => {
        const rawName = resource.public_id.split('/').pop()
        seenNames.add(rawName.toLowerCase())
        return {
          id: resource.public_id,
          name: rawName,
          mimeType: `image/${resource.format}`,
          thumbnailLink: resource.secure_url,
          createdTime: resource.created_at,
          size: resource.bytes,
          url: resource.secure_url,
        }
      })
      images.push(...cldImages)
    } catch (error) {
      console.warn('Cloudinary listImages warning:', error.message)
    }
  }

  // 2. Ambil dari folder lokal public/uploads jika ada (fallback & cegah duplikat)
  ensureUploadsDir()
  try {
    const localFiles = await fs.promises.readdir(UPLOADS_DIR)
    for (const f of localFiles) {
      if (/\.(jpe?g|png|webp|gif|svg)$/i.test(f)) {
        const baseName = f.replace(/\.[^/.]+$/, '').toLowerCase()
        if (seenNames.has(baseName) || seenNames.has(f.toLowerCase())) {
          continue
        }
        const stat = await fs.promises.stat(path.join(UPLOADS_DIR, f))
        images.push({
          id: `local_${f}`,
          name: f,
          mimeType: f.endsWith('.png') ? 'image/png' : f.endsWith('.webp') ? 'image/webp' : 'image/jpeg',
          thumbnailLink: `/uploads/${f}`,
          createdTime: stat.mtime.toISOString(),
          size: stat.size,
          url: `/uploads/${f}`,
        })
      }
    }
  } catch (err) {
    console.warn('Error reading local uploads folder:', err.message)
  }

  return images
}

/**
 * Delete an image by its ID.
 * @param {string} publicId
 * @returns {Promise<boolean>}
 */
export async function deleteImage(publicId) {
  if (publicId.startsWith('local_')) {
    const filename = publicId.replace('local_', '')
    const filePath = path.join(UPLOADS_DIR, filename)
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath)
      return true
    }
    return false
  }

  if (hasCloudinary) {
    try {
      const result = await cloudinary.uploader.destroy(publicId)
      return result.result === 'ok'
    } catch (error) {
      console.error('Cloudinary deleteImage error:', error.message)
      throw new Error(`Gagal menghapus gambar dari Cloudinary: ${error.message}`)
    }
  }

  return true
}

/**
 * Fetch image data/URL for proxy route compatibility.
 * @param {string} publicId
 */
export async function getImageStream(publicId) {
  if (publicId.startsWith('local_')) {
    const filename = publicId.replace('local_', '')
    const filePath = path.join(UPLOADS_DIR, filename)
    if (fs.existsSync(filePath)) {
      const stream = fs.createReadStream(filePath)
      const stat = fs.statSync(filePath)
      return {
        stream,
        mimeType: filename.endsWith('.png') ? 'image/png' : filename.endsWith('.webp') ? 'image/webp' : 'image/jpeg',
        name: filename,
        size: stat.size,
        url: `/uploads/${filename}`,
      }
    }
  }

  if (hasCloudinary) {
    const resource = await cloudinary.api.resource(publicId)
    const response = await fetch(resource.secure_url)
    return {
      stream: response.body,
      mimeType: `image/${resource.format}`,
      name: `${resource.public_id.split('/').pop()}.${resource.format}`,
      size: resource.bytes,
      url: resource.secure_url,
    }
  }

  throw new Error('Image not found')
}
