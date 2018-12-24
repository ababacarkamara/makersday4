const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Talent
let Talent = new Schema({
  prenom: {
    type: String
  },
  nom: {
    type: String
  },
  telephone: {
    type: Number
  },
  adresse: {
    type: String
  },
  mail: {
    type: String
  },
  ecole: {
    type: String
  },
  age: {
    type: Number
  }
},{
    collection: 'talent'
});

module.exports = mongoose.model('Talent', Talent);