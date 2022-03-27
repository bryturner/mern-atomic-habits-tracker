import React from 'react';
import { NewHabitFormStyled } from '../../styles/Form.styled';

function AddNewHabitForm(props) {
  return <NewHabitFormStyled>{props.children}</NewHabitFormStyled>;
}

export default AddNewHabitForm;
