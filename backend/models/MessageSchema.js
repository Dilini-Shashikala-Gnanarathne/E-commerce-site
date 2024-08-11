const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  username:  { type: String, required: true },
  email:  { type: String, required: true, unique: true },
  message:  { type: String, required: true },
  phoneNumber:  { type: String, required: true },
  

});
const Message= mongoose.model('Message', MessageSchema);

module.exports = Message;