import { Component } from 'react';
import { nanoid } from 'nanoid';

import FormAddContact from '../form/FormAddContact';
import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
// import css from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name /*&& item.number === number*/
    );
    return result;
  }

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...contact };
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  static defaultProps = {
    title: Phonebook,
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalisedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalisedName = name.toLocaleLowerCase();
      const result =
        normalisedName.includes(normalisedFilter) ||
        number.includes(normalisedFilter);
      console.log(result);
      return result;
    });
    return filteredContacts;
  }

  render() {
    const { addContact, handleChange, removeContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <FormAddContact onSubmit={addContact} />
        <p>Find contacts by name</p>
        {/* <Filter /> */}
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          value={filter}
        />

        <ContactList items={contacts} removeContact={removeContact} />
      </div>
    );
  }
}

export default Phonebook;
