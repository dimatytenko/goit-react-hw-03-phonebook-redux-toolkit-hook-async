import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

function ContactList() {
  const getVisibleContacts = (allContacts, value) => {
    const normalizedFilter = value.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
