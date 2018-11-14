'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('countries', [{
      name: 'Chile',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Brasil',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('countries', null, {});
  }
};
