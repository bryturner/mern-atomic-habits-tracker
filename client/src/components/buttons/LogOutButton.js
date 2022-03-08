import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ButtonStyled } from "../../styles/Button.styled";

function LogOutButton() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logOut() {
    await axios.get("http://localhost:5015/user/logout");
    await getLoggedIn();
    navigate("/logout");
  }
  return <button onClick={logOut}>Log Out</button>;
}

export default LogOutButton;
