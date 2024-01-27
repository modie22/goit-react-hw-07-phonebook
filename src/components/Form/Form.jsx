import css from './Form.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'storeRedux/selectors';
import { createContactsThunk } from 'storeRedux/Contacts/ThunkContacts';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelector);

  const handlerChange = e => {
    const {value,name}= e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    const foundUser = contacts.find(
      contact =>
        contact.name?.toLowerCase() === e.target.name.value.toLowerCase()
    );

    if (foundUser) {
      alert(`${e.target.name.value} is already in contacts`);
      return;
    }

    const formData = new FormData(e.currentTarget);

    dispatch(
      createContactsThunk({
        name: formData.get('name'),
        phone: formData.get('number'),
      })
    );

    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handlerChange}
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="text"
          name="number"
          value={number}
          onChange={handlerChange}
          placeholder="380*********"
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
