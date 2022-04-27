import React from 'react';

function ColorInput({ setState, value }) {
  return (
    <input
      type="color"
      defaultValue={value}
      onChange={e => {
        setState(e.target.value);
      }}
      required
    />
  );
}

export default ColorInput;
