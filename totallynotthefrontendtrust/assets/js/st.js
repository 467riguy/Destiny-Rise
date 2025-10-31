// startup.js -- hop off, skids

// Function to show the custom alert
function showCustomAlert(message) {
  const dialog = document.getElementById('custom-alert');
  const messageEl = document.getElementById('alert-message');

  messageEl.textContent = message;
  dialog.showModal(); // This automatically creates the backdrop and opens the dialog
}

// Function to hide the custom alert and clear the message
function hideCustomAlert() {
  const dialog = document.getElementById('custom-alert');
  const messageEl = document.getElementById('alert-message');

  dialog.close(); // Close the dialog
  messageEl.textContent = ''; // Clear the message content
}

// Call the function to show the custom alert after a delay
setTimeout(() => {
  showCustomAlert("Welcome");
}, 1000);
