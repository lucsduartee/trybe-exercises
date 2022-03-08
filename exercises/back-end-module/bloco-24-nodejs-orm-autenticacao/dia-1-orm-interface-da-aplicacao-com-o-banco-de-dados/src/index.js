const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/Book')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use('/books', bookRouter)

app.listen(PORT, () => console.log(
  `Server running on PORT: ${PORT}`,
));