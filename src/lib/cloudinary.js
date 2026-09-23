import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary instance
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

const FOLDER_NAME = 'portfolio-gallery'

/**
 * Upload an image buffer to Cloudinary.
 * @param {Buffer|Uint8Array} fileBuffer
 * @param {string} fileName
 * @param {string} mimeType
 * @returns {Promise<{id: string, name: string, url: string}>}
 */
export async function uploadImage(fileBuffer, fileName, mimeType) {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Cloudinary credentials missing: set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.')
  }

  return new Promise((resolve, reject) => {
    const cleanName = fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_')
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: FOLDER_NAME,
        public_id: `${cleanName}_${Date.now()}`,
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

/**
 * List all uploaded images in the portfolio folder.
 * @returns {Promise<Array<{id: string, name: string, mimeType: string, thumbnailLink: string, createdTime: string, url: string}>>}
 */
export async function listImages() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return []
  }

  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: FOLDER_NAME,
      max_results: 100,
    })

    return (result.resources || []).map((resource) => ({
      id: resource.public_id,
      name: resource.public_id.split('/').pop(),
      mimeType: `image/${resource.format}`,
      thumbnailLink: resource.secure_url,
      createdTime: resource.created_at,
      size: resource.bytes,
      url: resource.secure_url,
    }))
  } catch (error) {
    console.error('Cloudinary listImages error:', error.message)
    throw new Error(`Gagal memuat foto dari Cloudinary: ${error.message}`)
  }
}

/**
 * Delete an image by its Cloudinary publicId.
 * @param {string} publicId
 * @returns {Promise<boolean>}
 */
export async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId)
    return result.result === 'ok'
  } catch (error) {
    console.error('Cloudinary deleteImage error:', error.message)
    throw new Error(`Gagal menghapus gambar dari Cloudinary: ${error.message}`)
  }
}

/**
 * Fetch image data/URL for proxy route compatibility.
 * @param {string} publicId
 */
export async function getImageStream(publicId) {
  try {
    const resource = await cloudinary.api.resource(publicId)
    const response = await fetch(resource.secure_url)
    return {
      stream: response.body,
      mimeType: `image/${resource.format}`,
      name: `${resource.public_id.split('/').pop()}.${resource.format}`,
      size: resource.bytes,
      url: resource.secure_url,
    }
  } catch (error) {
    console.error('Cloudinary getImageStream error:', error.message)
    throw new Error(`Gagal mengambil data gambar: ${error.message}`)
  }
}
