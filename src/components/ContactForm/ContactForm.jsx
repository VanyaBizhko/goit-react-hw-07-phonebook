import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';


import styles from './ContactForm.module.css'

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!name || !number) {
      alert('Please fill in both name and number fields.');
      return;
    }

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      form.reset();
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
    form.reset();
  };
    return (
         <div className={styles.section}>
      <form onSubmit={handleSubmit}>
        <label className={styles.title}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={styles.title}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
    )
}
