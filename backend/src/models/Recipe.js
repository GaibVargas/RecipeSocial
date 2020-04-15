const { Model, DataTypes } = require('sequelize');

class Recipe extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      prepare_mode: DataTypes.STRING,
      observations: DataTypes.STRING,
      image: DataTypes.STRING
    },{
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'author', as: 'user_author' });
    this.belongsToMany(models.User, { foreignKey: 'recipe_id', through: 'favorites', as: 'users' });
  }
}

module.exports = Recipe;
