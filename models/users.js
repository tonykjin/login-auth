'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: "VARCHAR(MAX)"
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
