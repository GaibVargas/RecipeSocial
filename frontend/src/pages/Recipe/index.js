import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Recipe({match}) {
  const [recipe, setRecipe] = useState('');
  const [author, setAuthor] = useState('');

  const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    async function search() {
      const response = await api.get(`/recipes/${match.params.id}`);
      const recipe = response.data;

      const profile = await api.get(`/user/${user_id}`);
      const favorite_recipes = profile.data.favorite_recipes;
      const favorite_recipes_id = favorite_recipes.map(recipe => recipe.id);

      const novaReceita = favorite_recipes_id.includes(recipe.id) ? {...recipe, favorite:true} : recipe;

      setRecipe(novaReceita);
      setAuthor(recipe.user_author.name);
    }

    search();
  }, [match.params.id]);

  async function handleAddFavorite() {
    const novaReceita = {...recipe, favorite:true};
    const recipe_id = recipe.id;
    
    setRecipe(novaReceita);

    await api.post('/favorite', {recipe_id}, {
      headers: {
        authorization: user_id,
      }
    });
  }

  async function handleRemoveFavorite() {
    const novaReceita = {...recipe, favorite:false};
    const recipe_id = recipe.id;
    
    setRecipe(novaReceita);

    await api.delete('/favorite', {
      params: { user_id, recipe_id }
    });
  }

  return (
    <>
      <Header />

      <Container>
        {recipe && (
          <>
            <div className="header">
              <div className="info">
                <div className="title">
                  <h1>{recipe.title}</h1>
                  { recipe.favorite ? (
                    <AiFillStar 
                      onClick={() => handleRemoveFavorite()} 
                      size={30} 
                      color={"#C61111"}
                      style={{cursor:'pointer'}} 
                  />
                  ) : (
                    <AiOutlineStar 
                      onClick={() => handleAddFavorite()} 
                      size={30} 
                      color={"#C61111"}
                      style={{cursor:'pointer'}} 
                    />
                  ) }
                </div>
                <h2 className="author">Autor: <span><Link to={`/profile/${recipe.author}`}>{author}</Link></span></h2>
              </div>
              <img src={`http://localhost:3333/files/${recipe.image}`} alt=""/>
            </div>

            <div className="content">
              <div className="recipe">
                <h3>Ingredientes</h3>
                <p>{recipe.ingredients}</p>
              </div>

              <div className="recipe">
                <h3>Modo de preparo</h3>
                <p>{recipe.prepare_mode}</p>
              </div>

              {recipe.observations && (
                <div className="recipe">
                  <h3>Observações</h3>
                  <p>{recipe.observations}</p>
              </div>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
}
