import React from 'react';

function NumberInput({ setState, value }) {
  return (
    <input
      type="number"
      onChange={e => {
        setState(e.target.value);
      }}
      defaultValue={value}
      required
    />
  );
}

export default NumberInput;
