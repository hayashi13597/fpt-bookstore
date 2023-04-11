const Order = require('../models/Order');
const User = require('../models/User');

const orderController = {
  createOrder: async (req, res) => {
    try {
      const newOrder = await new Order({
        userId: req.body.userId,
        productId: req.body.productId,
        paypalPayment: req.body.paypalPayment,
      });
      const order = await newOrder.save();
      res.status(200).json(order);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
}

module.exports = orderController;