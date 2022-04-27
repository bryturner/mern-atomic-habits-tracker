import React from 'react';

function TextAreaInput({ placeholder, setState, value }) {
  return (
    <textarea
      placeholder={placeholder}
      onChange={e => {
        setState(e.target.value);
      }}
      defaultValue={value}
      rows="3"
      cols="33"
      required
    />
  );
}

export default TextAreaInput;
