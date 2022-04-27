import React from 'react';

function TextInput({ placeholder, setState, value }) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      onChange={e => {
        setState(e.target.value);
      }}
      defaultValue={value}
      required
    />
  );
}

export default TextInput;
