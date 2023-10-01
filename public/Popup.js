let mediaRecorder;
let recordedChunks = [];
let isRecording = false;
let fileKey; // Variable to store the file name obtained from the create endpoint

document.addEventListener('DOMContentLoaded', function () {
  const startRecordingButton = document.getElementById('startRecording');
  const stopRecordingButton = document.getElementById('stopRecording');
  const cameraToggle = document.getElementById('cameraToggle');
  const audioToggle = document.getElementById('audioToggle');

  startRecordingButton.addEventListener('click', async () => {
    if (cameraToggle.checked && audioToggle.checked && !isRecording) {
      try {
        // Step 1: Create a file on the server
        const createResponse = await fetch('https://savevid.onrender.com/create', {
          method: 'POST',
        });
        const createData = await createResponse.json();
        fileKey = createData.file_name;

        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            const chunk = new Blob([event.data], { type: 'video/webm' });

            // Step 2: Update the file with chunks
            sendChunkToServer(chunk);
          }
        };

        mediaRecorder.onstop = () => {
          // Finalize the file on the server if needed

          // Clear recordedChunks array for the next recording
          recordedChunks = [];

          isRecording = false;
        };

        // Start recording
        mediaRecorder.start();

        // Show the stop recording button
        stopRecordingButton.style.display = 'block';
        startRecordingButton.style.display = 'none';

        isRecording = true;
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    } else {
      // Inform the user to check both camera and audio toggles
      console.log('Please check both camera and audio toggles before starting recording.');
    }
  });

  stopRecordingButton.addEventListener('click', () => {
    if (mediaRecorder && isRecording) {
      // Stop recording
      mediaRecorder.stop();

      // Hide the stop recording button
      stopRecordingButton.style.display = 'none';
      startRecordingButton.style.display = 'block';

      window.close()
    }
  });
});

// Function to send a video chunk to the server
async function sendChunkToServer(chunk) {
  const formData = new FormData();
  formData.append('file_name', fileKey);
  formData.append('recording_chunk', chunk);

  try {
    // Replace 'https://savevid.onrender.com/update' with your actual update endpoint
    const updateResponse = await fetch('https://savevid.onrender.com/create', {
      method: 'POST',
      body: formData,
    });

    // Handle the response as needed
    const updateData = await updateResponse.json();
    console.log('Chunk uploaded:', updateData);
  } catch (error) {
    console.error('Error uploading chunk:', error);
  }
}

// Function to finalize the file on the server if needed
// ... (previous code)

// Function to finalize the file on the server if needed

// ... (remaining code)
