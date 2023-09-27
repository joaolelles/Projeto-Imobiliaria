'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      idClient: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id_client'
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  }
};
