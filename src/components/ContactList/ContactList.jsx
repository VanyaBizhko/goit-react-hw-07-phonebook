
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css'
import {  getFilter } from 'redux/selectors';

export default function ContactList({ contacts, onDelete, deleting }) {
   const filter = useSelector(getFilter);
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
     <p>{contact.name}: </p> 
      <p>{contact.number}</p>
            
      <button
        className={styles.button}
        onClick={() => onDelete(contact.id)}
      >{deleting ? 'Deleting...': 'Delete'}
      </button>
    </li>
  ))}
      </ul>
        </div>
    );
}
