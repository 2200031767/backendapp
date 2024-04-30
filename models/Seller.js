const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
