import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';


import styles from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();


    return (
        <div>
            <ul>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            {contact.name}: <br />
            {contact.number}
            <button
              className={styles.button}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
        </div>
    );
}
