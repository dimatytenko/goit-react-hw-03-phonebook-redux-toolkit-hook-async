import { useEffect } from 'react';

import ContactItem from 'components/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import PropTypes from 'prop-types';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

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
    <>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
