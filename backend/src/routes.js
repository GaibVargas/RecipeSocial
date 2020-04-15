const express = require('express');
// const multer = require('multer');

const UserController = require('./controllers/UserController');
const RecipeController = require('./controllers/RecipeController');
const FavoriteController = require('./controllers/FavoriteController');
const ProfileController = require('./controllers/ProfileController');

// const uploadConfig = require('./config/upload');

const routes = express.Router();

// const upload = multer(uploadConfig);

routes.post('/user', UserController.create);
routes.post('/user/login', UserController.index);
routes.get('/user/:id', ProfileController.index);

routes.get('/recipes', RecipeController.index);
routes.get('/recipes/:id', RecipeController.show);
routes.post('/recipes', /*upload.single('image'),*/ RecipeController.create);

routes.post('/favorite', FavoriteController.create);
routes.delete('/favorite', FavoriteController.delete);

module.exports = routes;
