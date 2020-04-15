import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import api from '../../services/api';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('user_id').then(data => {
      if(data) navigation.navigate('Tab');
    })
  }, []);

  async function handleLogin() {
    try {
      const response = await api.post('/user/login', {
        login, password
      });
      
      try {
        await AsyncStorage.setItem('user_id', String(response.data.id));
        navigation.navigate('Tab');
      } catch(e) {
        return alert('Erro interno, tente mais tarde');
      }

    } catch(e) {
      return alert('Login ou senha incorretos');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Login"
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={login}
            onChangeText={text => setLogin(text)}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            autoCapitalize='none'
            utoCorrect={false}
            secureTextEntry={true}
            alue={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.button_text}>Entrar</Text>
          </TouchableOpacity>

          <Text 
            style={styles.link}
            onPress={() => navigation.navigate('Register')}
          >Não tenho cadastro</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
