import React, { useState } from 'react';
import axios from 'axios';

import { ListStyled, ListItemStyled } from '../../styles/List.styled';
import DeleteHabitButton from '../buttons/DeleteHabitButton';
import HabitsListItem from './HabitsListItem';

function HabitsList({ habits, getHabits }) {
  function renderHabitsTable() {
    return habits.map((habit, i) => {
      return (
        <tr key={i}>
          <td>
            <DeleteHabitButton
              habitTitle={habit.habitTitle}
              getHabits={getHabits}
            />
          </td>

          <HabitsListItem habit={habit} />

          {renderCheckboxes(12)}
        </tr>
      );
    });
  }

  function renderHeadingNumbers(number) {
    let tableHeaderNumbers = [];
    for (let i = 1; i <= number; i++) {
      tableHeaderNumbers.push(i);
    }
    return tableHeaderNumbers.map((tableHeaderNumber, i) => {
      return <th key={i}>{tableHeaderNumber}</th>;
    });
  }

  function renderCheckboxes(columnNumber) {
    let habitCheckboxes = [];
    for (let i = 1; i <= columnNumber; i++) {
      habitCheckboxes.push(i);
    }
    return habitCheckboxes.map((checkbox, i) => {
      return (
        <td key={i}>
          <input value={i} type="checkbox" />
        </td>
      );
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Buttons</th>
            <th>Habit Title</th>
            {renderHeadingNumbers(12)}
          </tr>
        </thead>
        <tbody>{renderHabitsTable()}</tbody>
      </table>
    </div>
  );
}

export default HabitsList;
