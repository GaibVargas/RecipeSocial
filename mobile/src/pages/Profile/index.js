import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles';

import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList';

export default function Profile() {
  const [name, setName] = useState('');
  const [creations, setCreations] = useState('');
  const [favorites, setFavorites] = useState('');

  const route = useRoute();

  useEffect(() => {
    search();
  }, []);

  async function search() {
    const {data} = await api.get(`user/${route.params.user_id}`);
    setName(data.name);
    setCreations(data.recipes);
    setFavorites(data.favorite_recipes);
  }

  return (
    <>
    <Header title={name} />
    <ScrollView style={styles.container}>

      { name !== '' && (
        <View>
          <Text style={styles.title}>Criações</Text>
          { creations.length > 0 ? (
            <RecipesList list={creations} />
          ) : (
            <Text style={styles.message}>O usuário ainda não possui receitas aqui.</Text>
          ) }

          <Text style={styles.title}>Favoritos</Text>
          { favorites.length > 0 ? (
            <RecipesList list={favorites} />
          ) : (
            <Text style={styles.message}>O usuário ainda não possui receitas aqui.</Text>
          ) }
        </View>
      ) }
      
    </ScrollView>
    </>
  );
}
