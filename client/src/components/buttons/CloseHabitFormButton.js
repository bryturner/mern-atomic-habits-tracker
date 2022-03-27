import React from 'react';
import { CloseButtonStyled } from '../../styles/Button.styled';

function CloseHabitFormButton({ toggleHabitForm }) {
  return (
    <CloseButtonStyled type="button" onClick={toggleHabitForm}>
      X
    </CloseButtonStyled>
  );
}

export default CloseHabitFormButton;
