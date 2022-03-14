import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NavbarStyled } from "../styles/Navbar.styled";
import LogOutButton from "../components/buttons/LogOutButton";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <NavbarStyled>
      {loggedIn === false && (
        <>
          <h1>Atomic Habit Tracker</h1>
          <div>
            <Link to="/register">Register</Link>
            <span> / </span>
            <Link to="/">Login</Link>
          </div>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/home">Home</Link>
          <LogOutButton />
        </>
      )}
    </NavbarStyled>
  );
}

export default Navbar;
