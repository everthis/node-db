'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      feedbackSource: Sequelize.STRING,
      orderTime: Sequelize.DATE,
      orderId: Sequelize.INTEGER,
      feedbackPhone: Sequelize.STRING,
      feedbackName: Sequelize.STRING,
      priority: Sequelize.STRING,
      initiator: Sequelize.STRING,
      caseType: Sequelize.STRING,
      caseDescription: Sequelize.TEXT,
      currentResponder: Sequelize.STRING,
      caseStatus: Sequelize.STRING,
      caseCategory: Sequelize.STRING,
      caseOutput: Sequelize.TEXT,
      onlineTime: Sequelize.DATE,
      ext: Sequelize.TEXT,
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Cases');
  }
};