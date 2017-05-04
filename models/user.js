'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    role: DataTypes.TEXT,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        console.log(models)
        // associations can be defined here
      }
    }
  });
  return User;
};