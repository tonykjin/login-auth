const express = require('express');
const db = require('../models/index');

const PORT = process.env.PORT || 8080;

const app = express();

const newUser = require('./routes/user_registration');

app.use((err, req, res, next) => {
  res.sendStatus(500);
  console.log(err);
  if (err.fatal) {
    process.exit(1);
  }
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});

app.use('/new', newUser(db));
