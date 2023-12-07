const messageBoard = document.getElementById('message-board');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const ws = new WebSocket(`ws://${window.location.host}`);

ws.onmessage = function(event) {
 console.log("Message received from server:", event.data); // Log the raw data received
 const messageData = JSON.parse(event.data);
 console.log("Parsed message data:", messageData); // Log the parsed message data
 const messageElement = document.createElement('div');
 messageElement.textContent = `${new Date(messageData.timestamp).toLocaleTimeString()}: ${messageData.message}`;
 messageBoard.insertBefore(messageElement, messageBoard.firstChild);
};



sendButton.onclick = function() {
  const message = messageInput.value.trim();
  if (message) {
    ws.send(message);
    messageInput.value = '';
  }
};

messageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});


