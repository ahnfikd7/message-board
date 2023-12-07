const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const messages = []; // This will store our messages in memory
const clients = []; // This will keep track of connected WebSocket clients

app.use(express.static('public')); // Serve static files from the 'public' directory

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', ws => {
 clients.push(ws); // Add the new WebSocket connection to the clients array

 ws.on('message', messageBuffer => {
  const messageText = messageBuffer.toString();
  console.log("Received message from client:", messageText); // Log the raw message received
  if (messageText.length > 0 && messageText.length <= 128) {
    const newMessage = { message: messageText, timestamp: new Date().toISOString() }; // Ensure the timestamp is in ISO format for consistency
    console.log("Broadcasting message:", newMessage); // Log the message object before broadcasting
    messages.unshift(newMessage);
    const messageString = JSON.stringify(newMessage);
    clients.forEach(client => client.send(messageString));
  }
});

 
 ws.on('close', () => {
   // Remove the client from the array when it disconnects
   const index = clients.indexOf(ws);
   if (index > -1) {
     clients.splice(index, 1);
   }
 });
});


// Integrate WebSocket server with HTTP server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, ws => {
    wss.emit('connection', ws, request);
  });
});
