const createServer = require('./create-server');
const getConnections = require('./lib/get-connections');
const db = require('../models/index');

require('dotenv').config();

(async () => {
  try {
    const { redis, sequelize } = await getConnections();
    console.log('Connection established');

    const server = await createServer({ db, redis });
    server.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
    sequelize
      .authenticate()
      .then(() => {
        console.log('DB Connection established successfully');
      })
      .catch(err => {
        console.error('unable to connect to db', err);
      });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
