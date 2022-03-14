import React, { useState, useEffect } from "react";
import axios from "axios";

import NewHabitForm from "../components/forms/NewHabitForm";
import HabitsList from "../components/lists/HabitsList";

function HabitsChartPage() {
  const [userFirstName, setUserFirstName] = useState("");
  const [habits, setHabits] = useState([]);

  async function getFirstName() {
    try {
      const firstNameResponse = await axios.get(
        "http://localhost:5015/user/firstName"
      );
      setUserFirstName(firstNameResponse.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function getHabits() {
    try {
      const habitsResponse = await axios.get(
        "http://localhost:5015/user/habits"
      );
      setHabits(habitsResponse.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFirstName();
  }, []);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div>
      <h2>Welcome {userFirstName}</h2>
      <NewHabitForm getHabits={getHabits} />
      <HabitsList habits={habits} getHabits={getHabits} />
    </div>
  );
}

export default HabitsChartPage;
