const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  //allergies: [{type: String, minlength: 3}],  //there are at least 3 kinds of allergies in this array
  email:{type: String}
  //animals:{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
