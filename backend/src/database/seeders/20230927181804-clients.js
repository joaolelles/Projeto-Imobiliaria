'use strict';
const { hashSync } = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        username: 'Saler',
        role: 'saler',
        email: 'saler@saler.com',
        password: hashSync('salerPass')
      },
      {
        username: 'Buyer',
        role: 'buyer',
        email: 'buyer@buyer.com',
        password: hashSync('buyerPass')
      },
      {
        username: 'Tenant',
        role: 'tenant',
        email: 'tenant@tenant.com',
        password: hashSync('tenantPass')
      },
      {
        username: 'Locator',
        role: 'locator',
        email: 'locator@locator.com',
        password: hashSync('locatorPass')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
