const express = require('express');
const validate = require('./routes/validate-login');
const createUser = require('./routes/user_registration');

const createServer = async ({ db, redis }) => {
  return express()
    .use('/new', createUser( db ))
    .use('/', validate({ db, redis }))
}

module.exports = createServer;
