const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
  }, {
    underscored: true,
  })

  return Book;
}

module.exports = Book;