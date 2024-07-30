const User = require('../models/UserSchema');

const updateCart = async (req, res, cartField) => {
  const { email, totalAmount } = req.body;

  try {
    console.log('Request Body 8:', req.body);

    if (typeof totalAmount !== 'number') {
      return res.status(400).json({
        success: false,
        message: 'Total amount must be a number',
      });
    }

    let record = await User.findOne({ email });
    console.log('Record:', record);

    if (record) {
      if (!record[cartField]) {
        record[cartField] = { totalAmount: 0 };
      }

      record[cartField].totalAmount = totalAmount;

      await record.save();

      return res.status(200).json({
        success: true,
        message: 'Successfully updated',
        data: record,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Record not found',
      });
    }
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      err: err.message,
    });
  }
};

const cart = (req, res) => updateCart(req, res, 'cart');

module.exports = {
  cart
};
