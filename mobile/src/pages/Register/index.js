import React, { useState } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleRegister() {
    try {
      await api.post('/user', {
        name, login, password
      });

      navigation.navigate('Login');
    } catch(e) {
      return alert('Erro no cadastro, tente mais tarde!');
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            autoCorrect={false}
            value={name}
            onChangeText={text => setName(text)}
          />
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
            onPress={handleRegister}
          >
            <Text style={styles.button_text}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
