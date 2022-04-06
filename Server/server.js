const express = require('express');
const path = require('path');
const app = express();
const loginRouter = require('./routers/login');

app.use(express.json());
const PORT = 3000;

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})