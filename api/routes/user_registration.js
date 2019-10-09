const express = require('express');
const argon2 = require('argon2');

module.exports = (db) => {
  const router = express.Router();

  router.post('/user', async(req, res, next) => {
    const { email, name, password } = req.query;
    try {
      //front end just needs to ensure HTTPS to be safe from interception
      const hash = await argon2.hash(password);
      return db.Users.create({
        email,
        name,
        hashedPassword: hash
      }).then(response => {
        res.status(200).send({
          response,
        });
      })
    } catch (err) {
      return next(err);
    }
  });
  return router
}
