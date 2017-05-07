'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    role: DataTypes.STRING,
    ext: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Case);
      }
    }
  });
  return User;
};