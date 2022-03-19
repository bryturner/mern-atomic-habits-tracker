import React, { useContext } from 'react';
import HabitFormContext from '../../context/HabitFormContext';
import { AddHabitButtonStyled } from '../../styles/Button.styled';

function AddHabitButton() {
  const { toggleHabitForm } = useContext(HabitFormContext);

  return <button onClick={toggleHabitForm}>Add Habit</button>;
}

export default AddHabitButton;
