const Message = require('../models/MessageSchema');

const message = async (req, res) => {
  const {username,
    email,
    password,
    message,
    phoneNumber,
} = req.body;

  try {
    let user = null;
      user = await Message.findOne({ email });

    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    

    const userData = {  email, password, message, username,
      phoneNumber,
    };
    
   
      user = new Message(userData);
   

    await user.save();
    res.status(201).json({ success: true, message: 'Message successfully created' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Internal server error, please try again' });
  }
};


module.exports = {
    message
  };
  