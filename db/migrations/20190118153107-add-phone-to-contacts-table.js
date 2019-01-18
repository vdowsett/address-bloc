'use strict';

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts', 'phone', {
        type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'phone');
  }
};