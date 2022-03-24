import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import AuthContext from '../context/AuthContext';
import { LoginFormStyled } from '../styles/Form.styled';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        username,
        password,
      };
      await axios.post('http://localhost:5020/user/login', loginData);
      await getLoggedIn();
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <LoginFormStyled>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          autoFocus
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>
    </LoginFormStyled>
  );
}

export default LoginPage;
