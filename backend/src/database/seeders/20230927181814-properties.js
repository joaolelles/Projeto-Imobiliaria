'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('properties', [
      {
        address: 'Rua São Jesus, centro, 29',
        complement: 'ap 43',
        city: 'Bananal',
        state: 'SP',
        availability: 'sale',
        price: 350000
      },
      {
        address: 'Rua São Jesus, Jardins, 1256',
        complement: null,
        city: 'Bananal',
        state: 'SP',
        availability: 'sale',
        price: 1480000
      },
      {
        address: 'Rua Bernadino, centro, 320',
        complement: null,
        city: 'Bananal',
        state: 'SP',
        availability: 'rent',
        price: 4700
      },
      {
        address: 'Rua Jucelino, Laranjal, 705',
        complement: 'ap 1001',
        city: 'Bananal',
        state: 'SP',
        availability: 'rent',
        price: 2000
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('properties', null, {});
  }
};
