import { useState, useEffect } from 'react';
// import shortid from 'shortid';
import Form from './Phonebook/Form';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';
import Filter from './Filter/FilterContact';

export default function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

 const formSubmithandler = data => {
   if (
     !contacts.find(
       contact => data.name.toLocaleLowerCase() === contact.name.toLowerCase()
     )
   ) {
     setContacts(prevState => (prevState ? [...prevState, data] : [data]));
   } else {
     alert(`${data.name} is already in contacts.`);
   }
 };

 
  const deleteContact = contactId => {
   setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
 };

 
  const filterContact = evt => {
    setFilter( evt.currentTarget.value );
  };


  const normalizeFilter = filter.toLowerCase();
  const visibleFilter = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(normalizeFilter)
  );

  // const { filter } = state;

  return (
    <div className={css.style}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmithandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContact} />
      <ContactsList
        contactList={visibleFilter}
        ondeleteContact={deleteContact}
      />
    </div>
  );
}
