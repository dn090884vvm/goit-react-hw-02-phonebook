import React from 'react';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <li>
      <p>{`${name} : ${number}`}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};
