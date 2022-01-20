const express = require('express');
const {
  validateName,
  validatePassword,
  validateEmail,
} = require('../middlewares/validations');
const User = require('../model/User');

const router = express.Router();

router.post(
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

router.get('/', async (_req, res) => {
  const users = await User.getAll();
  res.status(201).json(users);
});

module.exports = router;
