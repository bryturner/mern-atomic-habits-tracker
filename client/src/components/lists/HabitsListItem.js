import React from 'react';
import {
  HabitDetailsStyled,
  HabitListItemStyled,
  HabitTitleStyled,
} from '../../styles/List.styled';

function HabitsListItem({ habit }) {
  return (
    <HabitListItemStyled>
      <HabitTitleStyled>{habit.habitTitle}</HabitTitleStyled>
      <HabitDetailsStyled>
        <ul>
          <li>Description: {habit.habitDescription}</li>
          <li>Frequency: {habit.habitFrequency}</li>
          <li>Duration: {habit.habitDuration} minutes</li>
        </ul>
      </HabitDetailsStyled>
      <div>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </div>
    </HabitListItemStyled>
  );
}

export default HabitsListItem;
