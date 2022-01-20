const connection = require('./connection');

const create = async (userData) => {
  const { firstName, lastName, email, password } = userData;
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);
  return {
    id: result.insertId,
    firstName,
    lastName,
    email,
  };
};

const getAll = async () => {
  const query = 'SELECT * FROM users';
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  create,
  getAll,
};
