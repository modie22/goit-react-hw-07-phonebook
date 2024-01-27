import css from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'storeRedux/selectors';
import { removeContactThunk } from 'storeRedux/Contacts/ThunkContacts';

function ContactList() {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ul className={css.list}>
      {getVisibleContacts().map(({ id, name, phone }) => (
        <li className={css.item} id={id} key={id}>
          <p className={css.info}>
            {name}: {phone}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(removeContactThunk(id))}
          >
            Delete{' contact '}
          </button>
        </li>
      ))}
    </ul>
  );
}
//

export default ContactList;
