import React, { useState } from 'react';
import { createNumArray } from '../../utils/helpers';
import { UncheckedCheckbox, CheckedCheckbox } from '../inputs';

import TableData from './TableData';

function TableDataCheckboxArray({
  daysInCurMonth,
  habitTitle,
  checkboxesChecked,
}) {
  function checkboxInArray(index) {
    for (let i = 0; i < checkboxesChecked.length; i++) {
      if (checkboxesChecked[i] === index) return true;
    }
    return false;
  }

  function renderCheckboxes() {
    const days = createNumArray(daysInCurMonth);
    // Uses days num array to map each checkbox with index
    // index is used as key and value of each checkbox
    return days.map((_, i) => {
      return (
        <TableData key={i}>
          {checkboxInArray(i) === false && (
            <UncheckedCheckbox value={i} habitTitle={habitTitle} />
          )}
          {checkboxInArray(i) === true && (
            <CheckedCheckbox value={i} habitTitle={habitTitle} />
          )}
        </TableData>
      );
    });
  }
  return <>{renderCheckboxes()}</>;
}

export default TableDataCheckboxArray;
