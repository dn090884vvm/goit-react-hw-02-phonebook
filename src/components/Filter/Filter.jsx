import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        id=""
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
