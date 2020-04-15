'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('recipes', 'prepare_mode', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
    queryInterface.changeColumn('recipes', 'observations', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    return queryInterface.changeColumn('recipes', 'ingredients', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('recipes', 'prepare_mode', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.changeColumn('recipes', 'observations', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    return queryInterface.changeColumn('recipes', 'ingredients', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
