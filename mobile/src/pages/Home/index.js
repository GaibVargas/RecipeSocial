import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import api from '../../services/api';

import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  async function loadRecipes() {
    const { data } = await api.get('recipes');

    setRecipes(data);
  }

  useEffect(() => {
    loadRecipes();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Página Inicial'} />
      <ScrollView>
        <Text style={styles.title}>Receitas</Text>

        { recipes.length !== 0 && (<RecipesList list={recipes} />) }
      </ScrollView>
    </SafeAreaView>
  );
}
