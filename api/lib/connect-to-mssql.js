const Sequelize = require('sequelize');

const connectToDb = async() => {
  const sequelize = new Sequelize("loginauth_db", "sa", "test", {
    host: "tonykjin",
    dialect: "mssql"
  });
  return sequelize;
}

module.exports = connectToDb;
