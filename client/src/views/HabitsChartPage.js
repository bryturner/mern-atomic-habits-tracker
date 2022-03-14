import React, { useState, useEffect } from "react";
import axios from "axios";
import NewHabitForm from "../components/forms/NewHabitForm";

import HabitsList from "../components/lists/HabitsList";
// import UserContext from "../context/UserContext";

function HabitsChartPage() {
  const [userFirstName, setUserFirstName] = useState("");
  const [habits, setHabits] = useState([]);

  async function getUserData() {
    const userResponse = await axios.get("http://localhost:5015/user/userData");

    setUserFirstName(userResponse.data.firstName);

    setHabits(userResponse.data.habits);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h2>Welcome {userFirstName}</h2>
      <NewHabitForm getUserData={getUserData} />
      <HabitsList habits={habits} getUserData={getUserData} />
    </div>
  );
}

export default HabitsChartPage;
