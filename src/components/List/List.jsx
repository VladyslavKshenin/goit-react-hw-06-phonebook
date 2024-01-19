import {ContactItem} from '../Item/Item';
import { List } from './List.styled'
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </List>
  );
};
