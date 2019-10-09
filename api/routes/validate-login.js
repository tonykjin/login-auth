const express = require('express');
const argon2 = require('argon2');
const sessionMiddleware = require('../lib/session-middleware');

module.exports = ({ db, redis }) => {
  const router = express.Router();

  router.get('/login', async(req, res, next) => {
    const { email, password } = req.query;
    try {
      const hashedPassword = await db.Users.findAll({
        where: {
          email: email
        },
        attributes: ['hashedPassword']
      }).then(data => data[0].dataValues.hashedPassword);
      if (await argon2.verify(hashedPassword, password)) {
        const session = sessionMiddleware({ redis });
        return res.status(202).send({
          status: 200,
          session,
        });
      } else {
        return res.status(401).send();
      }
    } catch(err) {
      console.error(err);
      process.exit(1);
    }
  });
  return router;
}
