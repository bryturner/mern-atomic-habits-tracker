import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function UserContextProvider(props) {
  const [userData, setUserData] = useState("");

  async function getUserData() {
    const userResponse = await axios.get("http://localhost:5015/user/userData");

    const userResponseData = userResponse.data;

    //  console.log(userResponseData);
    setUserData(userResponseData);
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <UserContext.Provider value={{ userData, getUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
