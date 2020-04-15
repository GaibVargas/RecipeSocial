const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');
const Recipe = require('../models/Recipe');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Recipe.init(sequelize);

User.associate(sequelize.models);
Recipe.associate(sequelize.models);

module.exports = sequelize;
