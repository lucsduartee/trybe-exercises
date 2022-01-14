const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const simpUtils = require('./fs-utils');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= +17) return res.status(401).json({ message: 'Unauthorized' });
  res.status(201).json({ message: `Hello, ${name}` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.`});
});

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpUtils.getSimp();

  res.status(200).json(simpsons);
}));

app.listen(3001, () => {
  console.log('Running on 3001');
});