const User = require('../models/User');

module.exports = {
  async index(req, res) {
    // const user_id = req.headers.authorization;
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: ['name'],
      include: [
        { association: 'recipes' }, // criações do profile buscado
        { association: 'favorite_recipes' }
      ]
    });

    return res.json(user);
  }  
};
