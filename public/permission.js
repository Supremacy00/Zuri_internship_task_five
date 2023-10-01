document.addEventListener('DOMContentLoaded', function () {
    const allowButton = document.getElementById('allowButton');
    const denyButton = document.getElementById('denyButton');
  
    allowButton.addEventListener('click', () => {
      // User clicked "Allow" button
      // Perform any necessary actions and close the permission prompt
      window.close();
    });
  
    denyButton.addEventListener('click', () => {
      // User clicked "Deny" button
      // Perform any necessary actions and close the permission prompt
      window.close();
    });
  });