import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post('/user', {
      name, login, password
    });
    
    history.push('/');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          value={login}
          onChange={e => setLogin(e.target.value)}
          placeholder="Login"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />

        <button type="submit" className="button">Cadastrar</button>
      </form>
    </Container>
  );
}
