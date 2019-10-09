const connectToRedis = require('./connect-to-redis');
const connectToDB = require('./connect-to-mssql');

const getConnections = async() => {
  const [ redis, sequelize ] = await Promise.all([
    connectToRedis(),
    connectToDB()
  ])
  return { redis, sequelize };
};

module.exports = getConnections;
