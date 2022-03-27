import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function TableHeaderRow({ daysInCurMonth }) {
  function renderHeaderNumbers() {
    let tableHeaderNumbers = [];
    for (let i = 1; i <= daysInCurMonth; i++) {
      tableHeaderNumbers.push(i);
    }
    return tableHeaderNumbers.map((tableHeaderNumber, i) => {
      return <TableHeader key={i}>{tableHeaderNumber}</TableHeader>;
    });
  }
  return (
    <TableRow>
      <TableHeader>Buttons</TableHeader>
      <TableHeader>Habits</TableHeader>
      {renderHeaderNumbers()}
    </TableRow>
  );
}

export default TableHeaderRow;
