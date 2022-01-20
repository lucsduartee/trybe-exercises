const connection = require('./connection');

const create = async (userData) => {
  const { firstName, lastName, email, password } = userData;
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);
  console.log(result);
  return {
    id: result.insertId,
    firstName,
    lastName,
    email,
  };
};

module.exports = {
  create,
};
