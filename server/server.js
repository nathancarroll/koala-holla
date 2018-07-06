const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const Koala = require('./public/models/koala.schema.js');


const koala = require('./routes/koala.js');

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

// Establish connection to DB using mongoose
const databaseURL = 'mongodb://localhost:27017/koalaholla'

mongoose.connect(databaseURL);

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${databaseURL}`);
});

mongoose.connection.on('error', (err) => {
  console.log('mongoose connection error:', err)
})

// Routes
// Should these be in a router?

// // POST
// app.post('/koala', (req, res) => {
//   console.log('POST to /koala req.body =', req.body);
// });

// // GET
// app.get('/koala', (req, res) => {
//   // Temporary mock data. Replace this with mongoose.
//   const mockData = [{ _id: 1, name: 'Mock 1', gender: 'F', age: 5, ready_to_transfer: true, notes: 'n/a' },
//                     { _id: 2, name: 'Mock 2', gender: 'M', age: 5, ready_to_transfer: false, notes: 'n/a' }]
//   res.send(mockData);
// })

// Static files
app.use(express.static('server/public'));
app.use('/koala', koala);

app.get('/search/:searchType/:searchKeyword', function(req, res){
  console.log('Got to Search GET');
  console.log(req.params.searchKeyword, req.params.searchType);
  
  Koala.find({
    [req.params.searchType] : req.params.searchKeyword
  }).then( function(response){
    res.send(response);
  }).catch(function(err){
    console.log('error', err);
    res.sendStatus(500);
  })
})
// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
