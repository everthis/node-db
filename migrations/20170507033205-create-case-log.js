'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CaseLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      submitTime: {
        type: Sequelize.DATE
      },
      operator: {
        type: Sequelize.STRING
      },
      operatorRole: {
        type: Sequelize.STRING
      },
      stepStatus: {
        type: Sequelize.STRING
      },
      reply: {
        type: Sequelize.TEXT
      },
      caseCategory: {
        type: Sequelize.STRING
      },
      onlineTime: {
        type: Sequelize.DATE
      },
      ext: {
        type: Sequelize.TEXT
      },
      CaseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cases',
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
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('CaseLogs');
  }
};