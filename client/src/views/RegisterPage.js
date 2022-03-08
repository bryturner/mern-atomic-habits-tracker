import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../context/AuthContext";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        firstName,
        email,
        username,
        password,
        passwordVerify,
      };
      await axios.post("http://localhost:5015/user/register", registerData);
      await getLoggedIn();
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Register new account</h1>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="First Name"
          autoFocus
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="email"
          placeholder="name@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="verify password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
