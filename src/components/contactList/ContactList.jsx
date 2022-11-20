import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactSlice';
import { Item, List } from './ContactList.styled';
// import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);

  console.log('filter', filter);
  const contactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  console.log('islist', contactList);
  return (
    <List>
      {contactList.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default ContactList;
