import React from 'react';

// Will render several components
// Props passed in at habit chart page level
function TableData(props) {
  return <td>{props.children}</td>;
}

export default TableData;
