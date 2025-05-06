const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Static website is running at http://localhost:${port}`);
});




// npm init -y
// npm install express
// node server.js
