import React, { useState } from 'react';
import { createNumArray } from '../../utils/helpers';
import { UncheckedCheckbox, CheckedCheckbox } from '../inputs';

import TableData from './TableData';

function TableDataCheckboxArray({
  daysInCurMonth,
  habitTitle,
  checkboxesChecked,
  getHabits,
}) {
  function checkboxInArray(index) {
    for (let i = 0; i < checkboxesChecked.length; i++) {
      if (checkboxesChecked[i] === index) return true;
    }
    return false;
  }

  function renderCheckboxes() {
    const days = createNumArray(daysInCurMonth);

    return days.map((_, i) => {
      return (
        <>
          {checkboxInArray(i) === false && (
            <TableData key={i}>
              <UncheckedCheckbox
                value={i}
                habitTitle={habitTitle}
                getHabits={getHabits}
              />
            </TableData>
          )}

          {checkboxInArray(i) === true && (
            <TableData key={i}>
              <CheckedCheckbox
                value={i}
                habitTitle={habitTitle}
                getHabits={getHabits}
              />
            </TableData>
          )}
        </>
      );
    });
  }
  return <>{renderCheckboxes()}</>;
}

export default TableDataCheckboxArray;
