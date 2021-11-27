'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'courses', key: 'id' },
        onDelete: 'CASCADE'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE'
      },
      feedback: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      expectations: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      progress: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_courses')
  }
};
