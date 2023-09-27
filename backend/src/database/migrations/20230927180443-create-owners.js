'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('owners', {
      idOwner: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'id_owner',
        references: {
          model: 'clients',
          key: 'id_client',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primeryKey: true,
      },
      idOwnerProperty: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'id_owner_property',
        references: {
          model: 'properties',
          key: 'id_property',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primeryKey: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('owners');
  }
};
