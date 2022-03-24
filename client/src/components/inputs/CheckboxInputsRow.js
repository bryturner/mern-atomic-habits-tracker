import React from 'react';
import { TableData } from '../table';
import CheckboxInput from './CheckboxInput';

function CheckboxRow(props) {
  return (
    <>
      <TableData>
        <CheckboxInput />
      </TableData>
    </>
  );
}

export default CheckboxRow;
