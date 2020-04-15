const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING
    },{
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Recipe, { foreignKey: 'author', as: 'recipes' });
    this.belongsToMany(models.Recipe, { foreignKey: 'user_id', through: 'favorites', as: 'favorite_recipes' });
  }
};

module.exports = User;
