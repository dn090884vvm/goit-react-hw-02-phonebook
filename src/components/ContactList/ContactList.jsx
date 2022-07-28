import { ContactItem } from './ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      ></ContactItem>
    ))}
  </ul>
);
