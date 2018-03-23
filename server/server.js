const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

// Routes


// Static files
app.use(express.static('server/public'));

// Start listening for requests on a specific port
app.listen(port, () => {
  console.log('listening on port', port);
});
