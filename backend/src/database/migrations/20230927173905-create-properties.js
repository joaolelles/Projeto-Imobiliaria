'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      idProperty: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id_property'
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      availability: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('properties');
  }
};
