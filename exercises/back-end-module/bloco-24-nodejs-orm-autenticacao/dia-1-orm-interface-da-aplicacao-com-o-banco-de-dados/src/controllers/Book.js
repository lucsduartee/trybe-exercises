const { Book } = require('../models');

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json({ books });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    return res.status(200).json({ book });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author } = req.body;
    const created = await Book.create({ title, author });

    return res.status(201).json({ created });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
} 

module.exports = {
  getAll,
  getById,
  create,
}
