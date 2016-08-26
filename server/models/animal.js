const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type:{type: String, required: true},  //'cat', 'mongoose'
  age:{type: Number, required: true, min: 0},
  picture:{type: String, required: true},
  owner:{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }
  // currentOwner:{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }
  // previousOwner:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }]
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
