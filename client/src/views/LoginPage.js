import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        username,
        password,
      };
      await axios.post("http://localhost:5015/user/login", loginData);
      //  .then((res) => getUserFirstName(res.data));
      await getLoggedIn();
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
