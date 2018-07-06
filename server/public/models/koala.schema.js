const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//define what a pet is
let koalaSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number},
  gender: {type: String},
  ready_to_transfer: {type: Boolean, required: true},
  notes: {type: String}
});

//Export our model of pet
module.exports = mongoose.model('Koala', koalaSchema)