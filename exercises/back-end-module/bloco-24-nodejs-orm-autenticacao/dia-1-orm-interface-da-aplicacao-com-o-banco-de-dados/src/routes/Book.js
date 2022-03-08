const express = require('express');
const Books = require('../controllers/Book');

const router = express.Router();

router.get('/', Books.getAll);

module.exports = router;
