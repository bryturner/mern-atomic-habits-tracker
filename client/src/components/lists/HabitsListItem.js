import React, { useState } from 'react';
import axios from 'axios';
import DeleteHabitButton from '../buttons/DeleteHabitButton';
import { TableData, TableRow } from '../table';

import TableDataCheckboxArray from '../table/TableDataCheckboxArray';

function HabitListItem({ daysInCurMonth, habits, getHabits }) {
  function renderHabit() {
    return habits.map((habit, i) => {
      const { habitTitle, checkboxColor, checkboxesChecked } = habit;

      return (
        <TableRow key={i}>
          <TableData>
            <DeleteHabitButton habitTitle={habitTitle} getHabits={getHabits} />
          </TableData>
          <TableData>
            <h2>{habitTitle}</h2>
          </TableData>
          <TableDataCheckboxArray
            daysInCurMonth={daysInCurMonth}
            habitTitle={habitTitle}
            checkboxColor={checkboxColor}
            checkboxesChecked={checkboxesChecked}
          />
        </TableRow>
      );
    });
  }

  return <>{renderHabit()}</>;
}
export default HabitListItem;
