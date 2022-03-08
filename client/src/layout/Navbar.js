import React from "react";

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
        </>
      )}
    </nav>
  );
}

export default Navbar;
