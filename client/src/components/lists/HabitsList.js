import React, { useState } from "react";
import axios from "axios";

import { ListStyled, ListItemStyled } from "../../styles/List.styled";
import DeleteHabitButton from "../buttons/DeleteHabitButton";
import HabitsListItem from "./HabitsListItem";

function HabitsList({ habits, getHabits }) {
  function renderHabits() {
    return habits.map((habit, i) => {
      return (
        <ListItemStyled key={i}>
          <DeleteHabitButton
            habitTitle={habit.habitTitle}
            getHabits={getHabits}
          />
          <HabitsListItem habit={habit} />
          {/* <p>
            {habit.habitTitle},{habit.habitDescription},{habit.habitFrequency},
            {habit.habitDuration} minutes,{habit.checkboxColor}
          </p> */}
        </ListItemStyled>
      );
    });
  }

  return (
    <div>
      <ListStyled>{renderHabits()}</ListStyled>
    </div>
  );
}

export default HabitsList;
