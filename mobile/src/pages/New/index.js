import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../components/Header';

import styles from './styles';
import api from '../../services/api';

export default function New() {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepare_mode, setPrepare_mode] = useState('');
  const [observations, setObservations] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  AsyncStorage.getItem('user_id').then(data => setUser(data));

  function handleSelectImage() {
    ImagePicker.showImagePicker({ title: 'Selecionar imagem' }, (upload) => {
      if(upload.error) {
        console.log(error);
        return alert('Erro interno, tente mais tarde');
      } else if(upload.didCancel) {
        console.log('Upload cancelado');
      } else {
        setPreview({ uri: `data:image/jpeg;base64,${upload.data}` });

        let prefix, sufix;

        if(upload.fileName) {
          [ prefix, sufix ] = upload.fileName.split('.');
          sufix = sufix.toLowerCase() === 'heic' ? 'jpg' : sufix;
        } else {
          prefix = new Date().getTime();
          sufix = 'jpg';
        }

        const imageDetails = {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${sufix}`,
        };

        setImage(imageDetails);
      }
    });
  }

  async function handleSubmit() {
    const dataForm = new FormData();

    dataForm.append('image', image);
    dataForm.append('title', title);
    dataForm.append('ingredients', ingredients);
    dataForm.append('prepare_mode', prepare_mode);
    dataForm.append('observations', observations);

    try {
      await api.post('/recipes', dataForm, {
        headers: {
          authorization: user,
        }
      });
    } catch (error) {
      alert(error)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Nova receita' />

      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.title}>Crie receitas incríveis, e compartilhe com todos!</Text>
          <TextInput
            placeholder='Título da receita'
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            placeholder='Ingredientes'
            style={styles.input}
            value={ingredients}
            onChangeText={text => setIngredients(text)}
          />
          <TextInput
            placeholder='Modo de prepado'
            style={[styles.input, styles.area]}
            multiline={true}
            textAlignVertical='top'
            value={prepare_mode}
            onChangeText={text => setPrepare_mode(text)}
          />
          <TextInput
            placeholder='Observações'
            style={styles.input}
            value={observations}
            onChangeText={text => setObservations(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
            <Text style={styles.button_text}>Escolher imagem</Text>
          </TouchableOpacity>

          { preview !== '' && (
            <View style={styles.img_container}>
              <Image style={styles.img} source={preview} />
            </View>
          ) }
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.button_text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
