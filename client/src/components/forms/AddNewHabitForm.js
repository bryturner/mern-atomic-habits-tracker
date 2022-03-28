import React, { useContext } from 'react';
import { NewHabitFormStyled } from '../../styles/Form.styled';
import HabitFormContext from '../../context/HabitFormContext';

function AddNewHabitForm(props) {
  const { toggleHabitForm, showHabitForm } = useContext(HabitFormContext);
  return (
    <NewHabitFormStyled toggle={showHabitForm}>
      {props.children}
    </NewHabitFormStyled>
  );
}

export default AddNewHabitForm;
