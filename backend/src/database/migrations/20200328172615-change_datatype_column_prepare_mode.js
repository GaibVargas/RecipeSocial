'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('recipes', 'ingredients', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('recipes', 'ingredients', {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: false,
    });
  }
};
