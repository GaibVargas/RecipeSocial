import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

import api from '../../services/api';
import styles from './styles';

import Header from '../../components/Header';

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [author, setAuthor] = useState('');
  const [user_id, setUser_id] = useState('');

  const route = useRoute();
  const navigation = useNavigation();

  async function getRecipeAuthor() {
    const { data } = await api.get(`/user/${route.params.recipe.author}`);
    setAuthor(data.name);
  }

  async function handleAddFavorite() {
    const newRecipe = {...recipe, favorite: true};
    const recipe_id = recipe.id;
    
    setRecipe(newRecipe);

    await api.post('/favorite', {recipe_id}, {
      headers: {
        authorization: user_id,
      }
    });
  }

  async function handleRemoveFavorite() {
    const newRecipe = {...recipe, favorite: false};
    const recipe_id = recipe.id;
    
    setRecipe(newRecipe);

    await api.delete('/favorite', {
      params: { user_id, recipe_id }
    });
  }

  useEffect(() => {
    setRecipe(route.params.recipe);
    getRecipeAuthor();
    AsyncStorage.getItem('user_id').then(data => setUser_id(data));
  }, []);

  return (
    <View style={styles.container}>
      <Header title={recipe.title} />
      
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.header_title}>
            <View style={styles.header_favorite}>
              <Text style={styles.recipe_title}>{recipe.title}</Text>
              { recipe.favorite ? (
                <Icon name='star' size={25} color="#c61111" onPress={handleRemoveFavorite} />
              ) : (
                <Icon name='staro' size={25} color="#c61111" onPress={handleAddFavorite} />
              ) }
            </View>
            <Text 
              style={styles.author}
              onPress={() => navigation.navigate('Profile', { user_id: recipe.author })}
            >{author}</Text>
          </View>
          <View style={styles.img_container}>
            <Image style={styles.img_container} source={{ uri: `http://192.168.0.108:3333/files/${recipe.image}` }} />
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.details_container}>
            <Text style={styles.details_title}>Ingredientes</Text>
            <Text style={styles.details_text}>{recipe.ingredients}</Text>
          </View>
          <View style={styles.details_container}>
            <Text style={styles.details_title}>Modo de preparo</Text>
            <Text style={styles.details_text}>{recipe.prepare_mode}</Text>
          </View>

          { recipe.observations !== ' ' && (
            <View style={styles.details_container}>
              <Text style={styles.details_title}>Observações</Text>
              <Text style={styles.details_text}>{recipe.observations}</Text>
            </View>
          ) }

        </View>
      </ScrollView>
    </View>
  );
}
