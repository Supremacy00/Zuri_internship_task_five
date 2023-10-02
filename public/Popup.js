let mediaRecorder;
let isRecording = false;
let fileKey;


document.addEventListener('DOMContentLoaded', function () {
  const startRecordingButton = document.getElementById('startRecording');
  const stopRecordingButton = document.getElementById('stopRecording');
  const cameraToggle = document.getElementById('cameraToggle');
  const audioToggle = document.getElementById('audioToggle');

  startRecordingButton.addEventListener('click', async () => {
    if (cameraToggle.checked && audioToggle.checked && !isRecording) {
      try {
    
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

            sendChunkToServer(chunk);
          }
        };

        mediaRecorder.onstop = () => {

          isRecording = false;
        };

      
        mediaRecorder.start();

        stopRecordingButton.style.display = 'block';
        startRecordingButton.style.display = 'none';

        isRecording = true;
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    } else {
      console.log('Please check both camera and audio toggles before starting recording.');
    }
  });

  stopRecordingButton.addEventListener('click', () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();

      stopRecordingButton.style.display = 'none';
      startRecordingButton.style.display = 'block';

      window.close()
    }
  });
});

async function sendChunkToServer(chunk) {
  const formData = new FormData();
  formData.append('file_name', fileKey);
  formData.append('recording_chunk', chunk);

  try {
    const updateResponse = await fetch('https://savevid.onrender.com/create', {
      method: 'POST',
      body: formData,
    });

    const updateData = await updateResponse.json();
    console.log('Chunk uploaded:', updateData);
  } catch (error) {
    console.error('Error uploading chunk:', error);
  }
}

document.getElementById('stopRecording').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, () => {
    const recordingPageUrl = 'https://zuri-internship-task-five-git-main-supremacy00.vercel.app/recorddata'; 

    chrome.tabs.create({ url: recordingPageUrl }, (newTab) => {
      console.log('Recording page opened:', newTab);
    });
  });
});



