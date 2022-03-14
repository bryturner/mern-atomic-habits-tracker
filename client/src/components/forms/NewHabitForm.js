import axios from "axios";
import React, { useState } from "react";

import { NewHabitFormStyled } from "../../styles/Form.styled";

function NewHabitForm({ getUserData }) {
  const [habitTitle, setHabitTitle] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("");
  const [habitDuration, setHabitDuration] = useState("");
  const [checkboxColor, setCheckboxColor] = useState("");

  async function saveNewHabit(e) {
    e.preventDefault();

    try {
      const habitData = {
        habitTitle: habitTitle,
        habitDescription: habitDescription,
        habitFrequency: habitFrequency,
        habitDuration: habitDuration,
        checkboxColor: checkboxColor,
      };

      const newHabitResponse = await axios.put(
        "http://localhost:5015/user/newHabit",
        habitData
      );
      console.log(newHabitResponse);
      getUserData();
      setHabitTitle("");
      setHabitDescription("");
      setHabitFrequency("");
      setHabitDuration("");
      setCheckboxColor("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <NewHabitFormStyled>
      <form onSubmit={saveNewHabit}>
        <input
          type="text"
          placeholder="Running"
          onChange={(e) => {
            setHabitTitle(e.target.value);
          }}
          value={habitTitle}
          autoFocus
          required
        />
        <textarea
          placeholder="Running/jogging to stay healthy"
          rows="5"
          cols="33"
          onChange={(e) => {
            setHabitDescription(e.target.value);
          }}
          value={habitDescription}
          required
        />
        <select
          onChange={(e) => {
            setHabitFrequency(e.target.value);
          }}
          value={habitFrequency}
          required
        >
          <option value="">How often?</option>
          <option value="Once per day">Once per day</option>
          <option value="Every other day">Every other day</option>
          <option value="2 or 3 per week">2 to 3 per week</option>
          <option value="Once per week">Once per week</option>
        </select>
        <label>
          <input
            type="number"
            placeholder="10"
            min="5"
            max="180"
            step="5"
            onChange={(e) => {
              setHabitDuration(e.target.value);
            }}
            value={habitDuration}
            required
          />
          minutes
        </label>
        <label>
          Choose a checkbox color:{" "}
          <input
            type="color"
            onChange={(e) => {
              //   if (e.target.value === "") {
              //     setCheckboxColor("#ff0000");
              //   }
              setCheckboxColor(e.target.value);
            }}
            value={checkboxColor}
            required
          />
        </label>
        <button type="submit">Save Habit</button>
      </form>
    </NewHabitFormStyled>
  );
}

export default NewHabitForm;
