const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware/auth');
const userController = require('../controller/userController');
const connectDB = require('../config/connectDB');
connectDB();

const authApi = (app) => {
  router.get('/', verifyToken, userController.loggedIn)
  router.post("/register", userController.registerUser);
  router.post("/login", userController.login);
  return app.use('/api/auth', router)
}

module.exports = authApi;
