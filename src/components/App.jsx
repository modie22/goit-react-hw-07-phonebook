import Container from './Container/Container';
import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './List/List';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'storeRedux/Contacts/ThunkContacts';
import { useEffect } from 'react';
import { contactsSelector } from 'storeRedux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
}

export default App;
