import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

import styles from './styles';
import api from '../../services/api';

export default function RecipesList({ list }) {
  const [recipes, setRecipes] = useState([]);
  const [user_id, setUser_id] = useState('');

  const navigation = useNavigation();

  function getUserProfile() {
    AsyncStorage.getItem('user_id').then(async (data) => {
      setUser_id(data); 

      const profile = await api.get(`/user/${data}`);
      const favorite_recipes = profile.data.favorite_recipes;
      const favorite_recipes_id = favorite_recipes.map(recipe => recipe.id);

      const recipe_array = list.map(recipe => {
        if(favorite_recipes_id.includes(recipe.id)) {
          return {...recipe, favorite: true};
        } else {
          return recipe
        }
      });

      setRecipes(recipe_array);
    });
  }

  async function handleAddFavorite(recipe_id) {
    const newRecipes = recipes.map(recipe => {
      if(recipe.id === recipe_id) {
        return {...recipe, favorite: true}
      } else {
        return recipe
      }
    });
    setRecipes(newRecipes);

    await api.post('/favorite', {recipe_id}, {
      headers: {
        authorization: user_id,
      }
    });
  }

  async function handleRemoveFavorite(recipe_id) {
    const newRecipes = recipes.map(recipe => {
      if(recipe.id === recipe_id) {
        return {...recipe, favorite: false}
      } else {
        return recipe
      }
    });
    setRecipes(newRecipes);

    await api.delete('/favorite', {
      params: { user_id, recipe_id }
    });
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <View style={styles.recipes_container}>
      { recipes.length !== 0 && recipes.map(recipe => (
        <View key={recipe.id} style={styles.recipe}>
          <View style={styles.recipe_header}>
            <Text 
              style={styles.recipe_title}
              onPress={() => navigation.navigate('Recipe', { recipe })}
            >{recipe.title}</Text>

            { recipe.favorite ? (
               <Icon name='star' size={25} color="#c61111" onPress={() => handleRemoveFavorite(recipe.id)} />
            ) : (
              <Icon name='staro' size={25} color="#c61111" onPress={() => handleAddFavorite(recipe.id)} />
            ) }
            
          </View>
            <View style={styles.recipe_img_container}>
              <Image style={styles.recipe_img} source={{uri: `http://192.168.0.108:3333/files/${recipe.image}`}} />
            </View>
        </View>
      )) }
    </View>
  );
}
