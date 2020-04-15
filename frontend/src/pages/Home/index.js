import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList';

import { Container } from './styles';

export default function Home() {
  const [recipes, setRecipes] = useState('');

  useEffect(() => {
    async function getRecipes() {
      const response = await api.get('recipes');
      
      setRecipes(response.data);
    }

    getRecipes();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1 className="title">Receitas</h1>

        {recipes && <RecipesList recipes={recipes} /> }
      </Container>
    </>
  );
}
