const express = require('express');

const app = express();
const cors = require('cors');
const userRouter = require('./routes/UserRouter');

const port = 8000;

app.use(cors());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
