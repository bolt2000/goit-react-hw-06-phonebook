import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/slice';

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getContacts(items, filter);
  const dispatch = useDispatch();

  const ondeleteContact = id => {
    dispatch(delContact(id));
  };

  return (
    <ul className={css.List}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.ContactItem} key={id}>
          <p className={css.ContactItemText}>
            {name}
            <span className={css.ContactItemSpan}>{number}</span>
          </p>
          <button
            onClick={() => ondeleteContact(id)}
            className={css.button}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
