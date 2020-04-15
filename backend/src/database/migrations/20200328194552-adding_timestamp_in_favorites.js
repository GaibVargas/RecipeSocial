'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('favorites', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false 
    });
    return queryInterface.addColumn('favorites', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false 
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('favorites', 'updated_at');
    return queryInterface.removeColumn('favorites', 'created_at');
  }
};
