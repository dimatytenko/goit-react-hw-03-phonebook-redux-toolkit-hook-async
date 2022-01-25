import { useEffect } from 'react';

import ContactItem from 'components/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

import PropTypes from 'prop-types';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(state =>
    contactsSelectors.getVisibleContacts(state),
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
