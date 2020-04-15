const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const { name, login, password } = req.body;
  
    const user = await User.create({
      name,
      login,
      password
    });
  
    return res.json(user);
  },

  async index(req, res) {
    const { login, password } = req.body;
    const [ user ] = await User.findAll({
      where : {
        login,
        password
      }
    });

    if(!user) {
      return res.status(401).json({ error: 'Login incorreto' });
    }

    return res.json({ id: user.id });
  }
};
