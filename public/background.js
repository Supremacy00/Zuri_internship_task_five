chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'showStopButton') {
    // Create and inject a button into the active tab to stop recording
    chrome.tabs.executeScript(
      {
        code: `
          const stopButton = document.createElement('button');
          stopButton.innerText = 'Stop Recording';
          stopButton.id = 'stopRecording';
          document.body.appendChild(stopButton);

          stopButton.addEventListener('click', function() {
            chrome.runtime.sendMessage({ type: 'stopRecording' });
          });
        `,
      },
      function () {
        // Handle any response if needed
      }
    );
  }
});

// Content script (content.js)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'stopRecording') {
    // Handle stop recording logic in the content script
    // ...
  }
});