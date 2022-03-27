import React, { useState } from 'react';
import { createNumArray } from '../../utils/helpers';
import { UncheckedCheckbox, CheckedCheckbox } from '../inputs';

import TableData from './TableData';
import CheckboxLabel from '../labels/CheckboxLabel';

function TableDataCheckboxes({
  daysInCurMonth,
  habitTitle,
  checkboxColor,
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
            <CheckboxLabel>
              <UncheckedCheckbox
                value={i}
                habitTitle={habitTitle}
                checkboxColor={checkboxColor}
              />
            </CheckboxLabel>
          )}
          {checkboxInArray(i) === true && (
            <CheckboxLabel>
              <CheckedCheckbox
                value={i}
                habitTitle={habitTitle}
                checkboxColor={checkboxColor}
              />
            </CheckboxLabel>
          )}
        </TableData>
      );
    });
  }
  return <>{renderCheckboxes()}</>;
}

export default TableDataCheckboxes;
