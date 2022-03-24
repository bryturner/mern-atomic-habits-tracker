import React, { useState } from 'react';
import axios from 'axios';
import DeleteHabitButton from '../buttons/DeleteHabitButton';
import { TableData, TableRow } from '../table';
import { createNumArray } from '../../utils/helpers';
import CheckboxInput from '../inputs/CheckboxInput';

function HabitListItem({ daysInCurMonth, habits, getHabits }) {
  function renderHabit() {
    return habits.map((habit, i) => {
      const { habitTitle, checkboxesChecked } = habit;

      return (
        <TableRow key={i}>
          <TableData>
            <DeleteHabitButton habitTitle={habitTitle} getHabits={getHabits} />
          </TableData>
          <TableData>
            <h2>{habitTitle}</h2>
          </TableData>
          {renderCheckboxes(
            daysInCurMonth,
            habitTitle,
            checkboxesChecked,
            getHabits
          )}
        </TableRow>
      );
    });
  }

  function renderCheckboxes(
    daysInCurMonth,
    habitTitle,
    checkboxesChecked,
    getHabits
  ) {
    const numbersArray = createNumArray(daysInCurMonth);

    return numbersArray.map((_, i) => {
      return (
        <TableData key={i}>
          <CheckboxInput
            value={i}
            habitTitle={habitTitle}
            checkboxesChecked={checkboxesChecked}
            getHabits={getHabits}
          />
        </TableData>
      );
    });
  }

  return <>{renderHabit()}</>;
}
export default HabitListItem;
