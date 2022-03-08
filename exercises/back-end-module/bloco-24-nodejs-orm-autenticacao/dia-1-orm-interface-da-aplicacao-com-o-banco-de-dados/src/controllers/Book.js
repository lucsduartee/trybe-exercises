const { Book } = require('../models');

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json({ books });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAll,
}
