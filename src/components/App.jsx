

import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'






export default function App() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
        />

        <h2>Contacts</h2>
        <Filter /> 
         <ContactList /> 
      </div>
    )
};
  
  // const [contacts, setContacts] = useState([])
//   const [filter, setFilter] = useState('')
//   const [name, setName] = useState('')
//   const [number, setNumber] = useState('')
//   const dispatch = useDispatch()
//   const handleInput = (e) => {
//     e.preventDefault();

//     switch (e.target.name) {
//       case 'name':
//         dispatch(filter(e.target.value));
//         break;
//       case 'number':
//         dispatch(filter(e.target.value));
//         break;
//       default:
//         return;
//     }
//   };
//    const handleChange = (e) => {
//     setFilter(e.target.value);
//    }
//   useEffect(() => {
//     const contactsLS = localStorage.getItem('contacts');
//     const parsedContact = JSON.parse(contactsLS);
//     setContacts(parsedContact || []);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//     const handleButton = (e) => {
//     e.preventDefault();
//     if (name && number) {
//       const isContactExists = contacts.some(
//         (contact) => contact.name.toLowerCase() === name.trim().toLowerCase()
//       );

//       if (isContactExists) {
//         alert(`Contact with name "${name}" already exists in the phonebook.`);
//       } else {
//         const newContact = {
//           id: nanoid(), 
//           name: name.trim(),
//           number: number.trim(),
//         };
//         setContacts((prevContacts) => [...prevContacts, newContact]);
//         setName('');
//         setNumber('');
//       }
//     }
//   };
// const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//  const handleDelete = (contactId) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== contactId)
//     );
//   };



// export class App extends Component{
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
//     name: '',
//   number: ''
//   }
//   handleInput = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };
//   handleChange = (e) => {
//     this.setState({ filter: e.target.value });
//   }
//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   handleDelete = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
//   }));
// };
//  handleButton = (e) => {
//   e.preventDefault();
//   const { name, number, contacts } = this.state;

//   if (name && number) {
//     const isContactExists = contacts.some((contact) => contact.name.toLowerCase() === name.trim().toLowerCase());

//     if (isContactExists) {
//       alert(`Contact with name "${name}" already exists in the phonebook.`);
//     } else {
//       const newContact = {
//         id: nanoid(),
//         name: name.trim(),
//         number: number.trim(),
//       };
//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, newContact],
//         name: "",
//         number: "",
//       }));
//     }
//   }
   
// };
//   render() {
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <div>
//   <h1>Phonebook</h1>
//         <ContactForm name={this.state.name}
//           handleInput={this.handleInput}
//           number={this.state.number}
//   handleButton={this.handleButton}      />

//   <h2>Contacts</h2>
//         <Filter value={this.state.filter}
//         onChange={this.handleChange}/>
//         <ContactList contacts={filteredContacts}
//                     contactDelete={this.handleDelete}      />
// </div>
//     )
//   }
// }
