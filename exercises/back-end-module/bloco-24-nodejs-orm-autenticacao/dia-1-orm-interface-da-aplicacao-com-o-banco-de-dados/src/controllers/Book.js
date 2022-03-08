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
};

const update = async (req, res) => {
  try {
    const { title, author } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author },
      { where: { id } },
    );

    if(!updateBook) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}
