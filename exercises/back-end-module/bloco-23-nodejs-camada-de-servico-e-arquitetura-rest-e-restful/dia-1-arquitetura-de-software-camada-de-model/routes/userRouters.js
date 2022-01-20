const express = require('express');
const {
  validateName,
  validatePassword,
  validateEmail,
} = require('../middlewares/validations');
const User = require('../model/User');

const router = express.Router();

router.get(
  '/',
  validateName,
  validatePassword,
  validateEmail,
  async (req, res) => {
    const userData = req.body;
    const createdUser = await User.create(userData);
    res.status(201).json(createdUser);
  }, 
);

module.exports = router;
