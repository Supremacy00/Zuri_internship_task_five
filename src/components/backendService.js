// backendService.js
const API_BASE_URL = 'http://your-backend-url.com';

export async function sendChunksToBackend(chunk, totalSize) {
  const response = await fetch(`${API_BASE_URL}/upload_chunk/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Range': `bytes ${chunk.start}-${chunk.end}/${totalSize}`,
    },
    body: chunk.blob,
  });

  if (!response.ok) {
    console.error('Error uploading chunk:', response.statusText);
  }

  return response.json();
}
