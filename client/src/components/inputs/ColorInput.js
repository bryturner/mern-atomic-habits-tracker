import React from 'react';

function ColorInput({ value }) {
  return <input type="color" defaultValue={value} required />;
}

export default ColorInput;
