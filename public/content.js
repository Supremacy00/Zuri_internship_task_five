let mediaRecorder;
let recordedChunks = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'startRecording') {
    startRecording();
  } else if (message.type === 'stopRecording') {
    stopRecording();
  }
});

async function startRecording() {
  const stream = await new Promise((resolve, reject) => {
    chrome.tabCapture.capture(
      { video: true, audio: true, audioConstraints: { mandatory: { echoCancellation: true } } },
      (stream) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(stream);
        }
      }
    );
  });

  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });

    const formData = new FormData();
    formData.append('recording', recordedBlob);

    // Send a POST request to your backend
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recording uploaded:', data);
      })
      .catch((error) => {
        console.error('Error uploading recording:', error);
      });

    // Clear recordedChunks array for the next recording
    recordedChunks = [];
  };

  mediaRecorder.start();
}

function stopRecording() {
  if (mediaRecorder) {
    mediaRecorder.stop();
  }
}


