const { RedisClient, createClient } = require('redis');
const retry = require('promise-retry');

const connectToRedis = async() => {
  let redis;
  return retry(async retry => {
    try {
      await new Promise((resolve, reject) => {
        redis = createClient({
          url: process.env.REDIS_URL,
          retry_strategy: ({ error }) => {
            reject(error);
            return null;
          }
        });
        redis.on('ready', () => redis.quit(resolve));
      })
      return createClient({
        url: process.env.REDIS_URL
      })
    } catch(err) {
      if (err.code !== 'ETIMEDOUT') return retry(err);
      throw err;
    }
  }, { retries: 5 })
}

module.exports = connectToRedis;
