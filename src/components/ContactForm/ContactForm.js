import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import './ContactForm.scss';

function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const onSubmit = state => dispatch(contactsActions.addContact(state));

  const handleSubmit = event => {
    event.preventDefault();

    const names = items.map(contact => contact.name);

    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      onSubmit({ name, number });
      onClose();
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form__box">
        <label className="Form__label">Name</label>
        <input
          className="Form__input"
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className="Form__label">Number</label>
        <input
          className="Form__input"
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className="Form__button" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
