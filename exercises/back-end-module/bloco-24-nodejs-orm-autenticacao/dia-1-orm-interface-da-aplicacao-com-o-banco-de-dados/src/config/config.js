require('dotenv').config();

module.exports = {
  'development': {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'sqlize_exercise',
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql'
  },
}