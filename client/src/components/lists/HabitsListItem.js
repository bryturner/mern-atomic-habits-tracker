import React from 'react';

import DeleteHabitButton from '../buttons/DeleteHabitButton';
import { TableData, TableRow, TableDataCheckboxes } from '../table';

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
          <TableDataCheckboxes
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
