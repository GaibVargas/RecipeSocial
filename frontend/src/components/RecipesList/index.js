import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { Container } from './styles';

export default function RecipesList({recipes}) {
  const [receitas, setReceitas] = useState('');
  const history = useHistory();

  const user_id = localStorage.getItem('user_id');

  async function getUserProfile() {
    const profile = await api.get(`/user/${user_id}`);
    const favorite_recipes = profile.data.favorite_recipes;
    const favorite_recipes_id = favorite_recipes.map(recipe => recipe.id);

    const array_recipes = Array.from(recipes);
    const novasReceitas = array_recipes.map(receita => {
      if(favorite_recipes_id.includes(receita.id)) {
        return {...receita, favorite: true};
      } else {
        return receita
      }
    });

    setReceitas(novasReceitas);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  async function handleAddFavorite(recipe_id) {
    const newReceitas = receitas.map(receita => {
      if(receita.id === recipe_id) {
        return {...receita, favorite:true}
      } else {
        return receita
      }
    });
    setReceitas(newReceitas);

    await api.post('/favorite', {recipe_id}, {
      headers: {
        authorization: user_id,
      }
    });
  }

  async function handleRemoveFavorite(recipe_id) {
    const newReceitas = receitas.map(receita => {
      if(receita.id === recipe_id) {
        return {...receita, favorite:false}
      } else {
        return receita
      }
    });
    setReceitas(newReceitas);

    await api.delete('/favorite', {
      params: { user_id, recipe_id }
    });
  }

  function handleRecipe(id) {
    history.push(`/recipe/${id}`);
  }

  return (
    <Container>
        <div className="recipes-list">
          <ul>

          { receitas && receitas.map(recipe => (
            <li key={recipe.id}>
              <div className="recipe-header">
                <button onClick={() => handleRecipe(recipe.id)}><strong>{recipe.title}</strong></button>

                { recipe.favorite ? (
                  <AiFillStar 
                    onClick={() => handleRemoveFavorite(recipe.id)} 
                    size={30} 
                    color={"#C61111"}
                    style={{cursor:'pointer'}} 
                  />
                ) : (
                  <AiOutlineStar 
                    onClick={() => handleAddFavorite(recipe.id)} 
                    size={30} 
                    color={"#C61111"}
                    style={{cursor:'pointer'}} 
                  />
                ) }
              </div>
              <img src={`http://localhost:3333/files/${recipe.image}`} alt="receita"/>
            </li>
          ))}

          </ul>
        </div>
    </Container>
  );
}
