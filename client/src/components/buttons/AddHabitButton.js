import React, { useContext } from 'react';
import HabitFormContext from '../../context/HabitFormContext';
import { AddHabitButtonStyled } from '../../styles/Button.styled';

function AddHabitButton() {
  const { toggleHabitForm } = useContext(HabitFormContext);

  return (
    <AddHabitButtonStyled onClick={toggleHabitForm}>
      Add Habit
    </AddHabitButtonStyled>
  );
}

export default AddHabitButton;
