const mongoose = require("mongoose")

const customerschema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
      },
    password: {
      type: String,
      required: true
    }
  });

  // jobseeker is collection name and schema 
const customer = mongoose.model('customer', customerschema);

module.exports=customer;

