import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

export default function New() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepare_mode, setPrepare_mode] = useState('');
  const [observations, setObservations] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const history = useHistory();

  const user = localStorage.getItem('user_id');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('title', name);
    data.append('ingredients', ingredients);
    data.append('prepare_mode', prepare_mode);
    data.append('observations', observations);
    data.append('image', image);

    await api.post('/recipes', data, {
      headers: {
        authorization: user,
      }
    });

    history.push('/home');
  }

  function handleImage(e) {
    e.preventDefault();

    setImage(e.target.files[0]);
    console.log(e.target.files[0]);

    const constructPreview = URL.createObjectURL(e.target.files[0]);
    setPreview(constructPreview);
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Crie receitas incríveis e compartilhe com todos!</h1>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da receita"
          />
          <input
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            placeholder="Ingredientes"
          />
          <textarea
            value={prepare_mode}
            onChange={e => setPrepare_mode(e.target.value)}
            placeholder="Modo de preparo"
          />
          <input
            value={observations}
            onChange={e => setObservations(e.target.value)}
            className="margin-bottom"
            placeholder="Observações"
          />
          <span>* O campo de observações é o único não obrigatório.</span>
          <input
            onChange={(e) => handleImage(e)} 
            type="file"
            placeholder="Escolha uma imagem"
          />
          {preview && (
            <div className="image">
              <img src={preview} alt=""/>
            </div>
          )}
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </Container>
    </>
  );
}
