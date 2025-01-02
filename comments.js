// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a function that will return a response
app.get('/comments', (req, res) => {
  res.send('This is a response from the comments route');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});