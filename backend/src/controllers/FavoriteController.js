const sequelize = require('../database');

module.exports = {
  async create(req, res) { 
    const user_id = req.headers.authorization;
    const {recipe_id} = req.body;
  
    await sequelize.query("insert into favorites (user_id, recipe_id) values(:user_id, :recipe_id)", {
      replacements: { user_id, recipe_id }
    });
  
    return res.json({ message: 'ok' });
  },

  async delete(req, res) {
    const {user_id, recipe_id} = req.query;

    await sequelize.query("delete from favorites where user_id = :user_id and recipe_id = :recipe_id", {
      replacements: { user_id, recipe_id }
    });
  
    return res.json({ message: 'ok' });
  }
};
