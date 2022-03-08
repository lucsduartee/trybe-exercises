const express = require('express');
const Books = require('../controllers/Book');

const router = express.Router();

router.get('/', Books.getAll);
router.get('/:id', Books.getById);
router.post('/', Books.create);

module.exports = router;
