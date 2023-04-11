const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  productId: [{
    type: String,
    required: true,
  }],
  paypalPayment: {
    type: Object
  }
}, { timestamps: true })

module.exports = mongoose.model('orders', OrderSchema);