// src/content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'startRecording') {
      // Handle starting recording
      console.log('Start recording logic');
    } else if (request.action === 'stopRecording') {
      // Handle stopping recording
      console.log('Stop recording logic');
    }
  });
  