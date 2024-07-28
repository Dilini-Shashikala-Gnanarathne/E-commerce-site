const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
  username:  { type: String, required: true },
  email:  { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  address:  { type: String, required: true },
  country:  { type: String, required: true },
  phoneNumber:  { type: String, required: true },
  postalCode: {type : Number},
  role: {
    type: String,
  },
  cart:[]
 
});

const User = mongoose.model('User', userSchema);

module.exports = User;


