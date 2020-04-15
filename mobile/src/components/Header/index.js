import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

import styles from './styles';

export default function Header({ title }) {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name='logout' size={30} color={'#fff'} onPress={handleLogout} />
    </View>
  );
}
