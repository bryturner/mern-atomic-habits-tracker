import React from 'react';

function SelectOptionInput({ setState, value }) {
  return (
    <select
      defaultValue={value}
      onChange={e => {
        setState(e.target.value);
      }}
      required
    >
      <option value="">Select one</option>
      <option value="Once per day">Once per day</option>
      <option value="Every other day">Every other day</option>
      <option value="2 or 3 per week">2 to 3 per week</option>
      <option value="Once per week">Once per week</option>
    </select>
  );
}

export default SelectOptionInput;
