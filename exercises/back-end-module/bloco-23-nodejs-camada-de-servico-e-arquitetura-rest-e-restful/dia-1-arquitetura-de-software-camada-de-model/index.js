const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouters');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
})

