import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const response = await api.post('/user/login', {
      login, password
    });

    const user = response.data.id;

    if(!user) {
      return console.log('Login incorreto');
    }

    localStorage.setItem('user_id', user);
    history.push('/home');
  }

  return (
    <Container>
      <div className="register">
        <h1 className="title">Recipe</h1>
        <h1 className="register-title">Bem-vindo!</h1>
        <p>Entre para a maior comunidade de compartilhamentos de receitas.</p>
        <p>Crie receitas, compatilhe com as pessoas, faça amigos, e crie laços apartir do paladar.</p>
        <Link className="button" to="/register">Cadastrar</Link>
      </div>
      <div className="login">
        <h1 className="title2">Social</h1>
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin}>
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

          <button className="button" type="submit">Entrar</button>
        </form>
      </div>
    </Container>
  );
}
