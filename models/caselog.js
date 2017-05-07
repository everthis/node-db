'use strict';
module.exports = function(sequelize, DataTypes) {
  var CaseLog = sequelize.define('CaseLog', {
    submitTime: DataTypes.DATE,
    operator: DataTypes.STRING,
    operatorRole: DataTypes.STRING,
    stepStatus: DataTypes.STRING,
    reply: DataTypes.TEXT,
    caseCategory: DataTypes.STRING,
    onlineTime: DataTypes.DATE,
    ext: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        CaseLog.belongsTo(models.Case)
        // associations can be defined here
      }
    }
  });
  return CaseLog;
};