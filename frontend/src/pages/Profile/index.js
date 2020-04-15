import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList';

import { Container } from './styles';

export default function Profile({ match }) {
  const [name, setName] = useState('');
  const [creations, setCreations] = useState('');
  const [favorites, setFavorites] = useState('');

  useEffect(() => {
    search();
  }, []);

  async function search() {
    const {data} = await api.get(`user/${match.params.id}`);
    setName(data.name);
    setCreations(data.recipes);
    setFavorites(data.favorite_recipes);
  }

  return (
    <>
      <Header />
      {name && (
        <Container>
          <h1 className="name">{name}</h1>

          <h2>Criações</h2>
          {creations.length > 0 ? (
            <RecipesList recipes={creations} />
          ):(
            <span>O usuário ainda não possui receitas aqui.</span>
          )}

          <h2>Favoritos</h2>
          {favorites.length > 0 ? (
            <RecipesList recipes={favorites} />
          ):(
            <span>O usuário ainda não possui receitas aqui.</span>
          )}
        </Container>
      )}
    </>
  );
}
