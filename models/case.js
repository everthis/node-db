'use strict';
module.exports = function(sequelize, DataTypes) {
  var Case = sequelize.define('Case', {
    feedbackSource: DataTypes.STRING,
    orderTime: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
    feedbackPhone: DataTypes.STRING,
    feedbackName: DataTypes.STRING,
    priority: DataTypes.STRING,
    initiator: DataTypes.STRING,
    caseType: DataTypes.STRING,
    caseDescription: DataTypes.TEXT,
    currentResponder: DataTypes.STRING,
    caseStatus: DataTypes.STRING,
    caseCategory: DataTypes.STRING,
    caseOutput: DataTypes.TEXT,
    onlineTime: DataTypes.DATE,
    ext: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Case.belongsTo(models.User, {foreignKey: 'UserId'})
        Case.hasMany(models.CaseLog)
      }
    }
  });
  return Case;
};