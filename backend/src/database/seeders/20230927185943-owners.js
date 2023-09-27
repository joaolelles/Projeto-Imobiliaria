'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('owners', [
      {
        id_owner: 1,
        id_owner_property: 2
      },
      {
        id_owner: 4,
        id_owner_property: 3
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('owners', null, {});
  }
};
