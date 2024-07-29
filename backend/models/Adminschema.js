const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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

});
const Admin= mongoose.model('Admin', AdminSchema);

module.exports = Admin;