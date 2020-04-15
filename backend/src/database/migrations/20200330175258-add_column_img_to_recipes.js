'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('recipes', 'image', {
      type: Sequelize.STRING,
      allowNull: true 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('recipes', 'image');
  }
};
