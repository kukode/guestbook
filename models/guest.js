'use strict';
module.exports = (sequelize, DataTypes) => {
  const guest = sequelize.define('guest', {
    fullName: DataTypes.STRING,
    company: DataTypes.STRING
  }, {});
  guest.associate = function(models) {
    // associations can be defined here
  };
  return guest;
};