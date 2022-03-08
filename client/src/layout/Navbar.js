import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LogOutButton from "../components/buttons/LogOutButton";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <nav>
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/home">Home</Link>
          <LogOutButton />
        </>
      )}
    </nav>
  );
}

export default Navbar;
