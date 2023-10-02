chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'showStopButton') {

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
      }
    );
  }
});
