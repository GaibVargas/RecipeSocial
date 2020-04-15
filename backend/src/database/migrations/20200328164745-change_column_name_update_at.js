'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('recipes', 'update_at', 'updated_at');
    return queryInterface.renameColumn('users', 'update_at', 'updated_at');
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('recipes', 'updatd_at', 'update_at');
    return queryInterface.renameColumn('users', 'updatd_at', 'update_at');
  }
};
