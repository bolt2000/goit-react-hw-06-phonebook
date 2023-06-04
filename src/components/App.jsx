import Form from './Phonebook/Form';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';
import Filter from './Filter/FilterContact';
// import { changeFilter } from 'redux/slice';
// import { getContacts, getFilter } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';

export default function App() {


  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  // const formSubmithandler = data => {
  //   if (
  //     !contacts.find(
  //       contact => data.name.toLocaleLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     dispatch(prevState => (prevState ? [...prevState, data] : [data]));
  //   } else {
  //     alert(`${data.name} is already in contacts.`);
  //   }
  // };

  return (
    <div className={css.style}>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList/>
    </div>
  );
}
