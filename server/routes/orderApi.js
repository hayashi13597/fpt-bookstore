const express = require("express");
const orderController = require("../controller/orderController");

let router = express.Router();

const productApi = (app) => {
  router.post('/', orderController.createOrder);

  return app.use('/api/orders/', router)
}
module.exports = productApi;