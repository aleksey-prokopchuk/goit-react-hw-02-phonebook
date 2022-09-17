import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './FormAddContact.module.css';

const { form, form_lable, btn_submit } = css;

class FormAddContact extends Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  addContact = event => {
    event.preventDefault();
    const { name, number } = this.state;
    // console.log(name, number);
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(event.target.value);
  };

  render() {
    const { nameId, numberId, addContact, handleChange } = this;

    return (
      <form className={form} onSubmit={addContact}>
        <label className={form_lable} htmlFor={nameId}>
          Name
        </label>

        <input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={handleChange}
        />

        <label className={form_lable} htmlFor={numberId}>
          Number
        </label>

        <input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={handleChange}
        />

        <button className={btn_submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default FormAddContact;
