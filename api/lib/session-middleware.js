const session = require('express-session');
const sessionStore = require('connect-redis');

const sessionMiddleware = ({ redis }) => {

  const RedisStore = sessionStore(session);

  return session({
    proxy: true,
    rolling: true,
    resave: false,
    name: 'token',
    genid: req => req.token,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    store: new RedisStore({
      prefix: '',
      client: redis,
      ttl: process.env.SESSION_EXPIRY
    }),
    cookie: {
      maxAge: process.env.SESSION_EXPIRY
    }
  })
}

module.exports = sessionMiddleware;
