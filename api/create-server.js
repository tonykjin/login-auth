const express = require('express');
const validate = require('./routes/validate-login');
const createUser = require('./routes/user_registration');
const cors = require('cors');

const createServer = async ({ db, redis }) => {
  return express()
    .use(cors())
    .use('/new', createUser( db ))
    .use('/', validate({ db, redis }))
}

module.exports = createServer;
