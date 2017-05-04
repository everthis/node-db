'use strict';
module.exports = function(sequelize, DataTypes) {
  var doc = sequelize.define('Doc', {
    content: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Doc.belongsTo(models.User)
      }
    }
  });
  return doc;
};