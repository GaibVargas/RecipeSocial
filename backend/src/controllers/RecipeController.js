const path = require('path');
const sharp = require('sharp');
const fs = require('fs');
const Recipe = require('../models/Recipe');

const multer = require('multer');
const uploadConfig = require('../config/upload');
const upload = multer(uploadConfig);
const uploadImage = upload.single('image');

module.exports = {
  async index(req, res) {
    const recipes = await Recipe.findAll();

    return res.json(recipes);
  },

  async show(req, res) {
    const { id } = req.params;

    const recipe = await Recipe.findByPk(id, {
      include: { association: 'user_author', attributes: ['name', 'id']}
    });

    return res.json(recipe);
  },

  create(req, res) {
    uploadImage(req, res, async (err) => {
      if(err instanceof multer.MulterError) {
        console.log('Erro no multer');
      } else if(err) {
        console.log('Erro desconhecido');
      }

      const author = parseInt(req.headers.authorization);
      const { title, ingredients, prepare_mode, observations } = req.body;

      //req.file -> traz informações da imagem enviada

      const fileName = `${Date.now()}.jpg`;

      await sharp(req.file.path)
        .resize(500)
        .jpeg({quality: 80})
        .toFile(
          path.resolve(req.file.destination, 'resized', fileName)
        );

      console.log({
        title,
        ingredients,
        prepare_mode,
        observations,
        author,
        image: fileName
      });

      await Recipe.create({
        title,
        ingredients,
        prepare_mode,
        observations,
        author,
        image: fileName
      });

      fs.unlinkSync(req.file.path);
    
      return res.json({message: 'ok'});
    });
  }

};
