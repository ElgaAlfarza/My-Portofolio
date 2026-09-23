import { google } from 'googleapis'
import { Readable } from 'stream'

/**
 * Singleton Google Drive client initialized using Service Account environment variables.
 */
let driveClientInstance = null

function getDriveClient() {
  if (driveClientInstance) {
    return driveClientInstance
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  let privateKey = process.env.GOOGLE_PRIVATE_KEY

  if (!clientEmail || !privateKey) {
    throw new Error(
      'Google Drive credentials missing: Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in environment variables.'
    )
  }

  // Handle both literal newline strings and actual newlines in private key
  privateKey = privateKey.replace(/\\n/g, '\n')

  try {
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/drive'],
    })

    driveClientInstance = google.drive({ version: 'v3', auth })
    return driveClientInstance
  } catch (error) {
    console.error('Failed to initialize Google Drive JWT auth client:', error.message)
    throw new Error(`Google Drive Auth Error: ${error.message}`)
  }
}

/**
 * List all image files from a specific Google Drive folder.
 * @param {string} [folderId] - Google Drive Folder ID (defaults to GOOGLE_DRIVE_FOLDER_ID)
 * @returns {Promise<Array<{id: string, name: string, mimeType: string, thumbnailLink: string, createdTime: string}>>}
 */
export async function listImages(folderId = process.env.GOOGLE_DRIVE_FOLDER_ID) {
  if (!folderId) {
    throw new Error('Google Drive folder ID is missing. Set GOOGLE_DRIVE_FOLDER_ID in environment variables.')
  }

  const drive = getDriveClient()

  try {
    const query = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`
    const response = await drive.files.list({
      q: query,
      fields: 'files(id, name, mimeType, thumbnailLink, createdTime, size)',
      orderBy: 'createdTime desc',
      pageSize: 100,
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    })

    const files = response.data.files || []
    return files.map((file) => ({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      thumbnailLink: file.thumbnailLink || null,
      createdTime: file.createdTime,
      size: file.size,
    }))
  } catch (error) {
    console.error(`Google Drive listImages failed for folder [${folderId}]:`, error.message)
    if (error.code === 404) {
      throw new Error(`Google Drive folder not found (404). Check GOOGLE_DRIVE_FOLDER_ID and ensure it is shared with the Service Account.`)
    }
    if (error.code === 403) {
      throw new Error(`Google Drive permission denied or quota exceeded (403): ${error.message}`)
    }
    throw new Error(`Failed to list images from Google Drive: ${error.message}`)
  }
}

/**
 * Upload an image buffer to a specific Google Drive folder.
 * @param {Buffer|Uint8Array} fileBuffer - File content in buffer
 * @param {string} fileName - File name with extension
 * @param {string} mimeType - MIME type e.g. 'image/jpeg'
 * @param {string} [folderId] - Target Google Drive Folder ID
 * @returns {Promise<{id: string, name: string}>}
 */
export async function uploadImage(
  fileBuffer,
  fileName,
  mimeType,
  folderId = process.env.GOOGLE_DRIVE_FOLDER_ID
) {
  if (!folderId) {
    throw new Error('Google Drive target folder ID is missing. Set GOOGLE_DRIVE_FOLDER_ID in environment variables.')
  }

  if (!fileBuffer || fileBuffer.length === 0) {
    throw new Error('Cannot upload empty file buffer.')
  }

  const drive = getDriveClient()

  try {
    const stream = Readable.from(Buffer.from(fileBuffer))

    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [folderId],
      },
      media: {
        mimeType: mimeType || 'image/jpeg',
        body: stream,
      },
      fields: 'id, name, mimeType, webViewLink',
      supportsAllDrives: true,
    })

    return {
      id: response.data.id,
      name: response.data.name,
    }
  } catch (error) {
    console.error(`Google Drive uploadImage failed for file [${fileName}]:`, error.message)
    if (error.code === 403) {
      throw new Error(`Google Drive upload failed: Service Account does not have Editor access to the folder or quota is exhausted.`)
    }
    throw new Error(`Failed to upload image to Google Drive: ${error.message}`)
  }
}

/**
 * Delete an image file from Google Drive by fileId.
 * @param {string} fileId - The ID of the file to delete
 * @returns {Promise<boolean>}
 */
export async function deleteImage(fileId) {
  if (!fileId) {
    throw new Error('File ID is required to delete an image.')
  }

  const drive = getDriveClient()

  try {
    await drive.files.delete({
      fileId,
      supportsAllDrives: true,
    })
    return true
  } catch (error) {
    console.error(`Google Drive deleteImage failed for fileId [${fileId}]:`, error.message)
    if (error.code === 404) {
      throw new Error(`File with ID [${fileId}] not found in Google Drive.`)
    }
    if (error.code === 403) {
      throw new Error(`Permission denied to delete file [${fileId}]: Ensure Service Account has Editor permission.`)
    }
    throw new Error(`Failed to delete image from Google Drive: ${error.message}`)
  }
}

/**
 * Get image metadata and readable stream directly from Google Drive.
 * @param {string} fileId
 * @returns {Promise<{stream: NodeJS.ReadableStream, mimeType: string, name: string, size: string}>}
 */
export async function getImageStream(fileId) {
  if (!fileId) {
    throw new Error('File ID is required to get image stream.')
  }

  const drive = getDriveClient()

  try {
    // 1. Fetch metadata first to get mimeType and name
    const metaRes = await drive.files.get({
      fileId,
      fields: 'id, name, mimeType, size',
      supportsAllDrives: true,
    })

    const { mimeType, name, size } = metaRes.data

    // 2. Fetch binary stream
    const mediaRes = await drive.files.get(
      {
        fileId,
        alt: 'media',
        supportsAllDrives: true,
      },
      { responseType: 'stream' }
    )

    return {
      stream: mediaRes.data,
      mimeType: mimeType || 'application/octet-stream',
      name: name || 'image',
      size: size || null,
    }
  } catch (error) {
    console.error(`Google Drive getImageStream failed for [${fileId}]:`, error.message)
    if (error.code === 404) {
      throw new Error(`Image not found in Google Drive (404).`)
    }
    throw new Error(`Failed to retrieve image from Google Drive: ${error.message}`)
  }
}
