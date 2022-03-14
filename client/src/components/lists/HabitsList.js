import React from "react";

import { ListStyled, ListItemStyled } from "../../styles/List.styled";
import DeleteHabitButton from "../buttons/DeleteHabitButton";
import EditHabitButton from "../buttons/EditHabitButton";

function HabitsList({ habits, getUserData }) {
  function renderHabits() {
    return habits.map((habit, i) => {
      return (
        <ListItemStyled key={i}>
          <DeleteHabitButton
            habitTitle={habit.habitTitle}
            getUserData={getUserData}
          />
          <EditHabitButton />
          <p>
            {habit.habitTitle},{habit.habitDescription},{habit.habitFrequency},
            {habit.habitDuration} minutes,{habit.checkboxColor}
          </p>
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
