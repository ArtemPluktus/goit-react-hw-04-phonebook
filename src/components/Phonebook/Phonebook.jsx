import React, { Component } from 'react';
import css from './Phonebook.module.css';
import { ContactForm } from './ContactForm.jsx';
import { Filter } from './Filter.jsx';
import { ContactList } from './ContactList';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleInputNameChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleInputNumberChange = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  saveContact = e => {
    e.preventDefault();

    for (let el of this.state.contacts) {
      if (el.name === this.state.name) {
        return alert(`${this.state.name} is already in contacts`);
      }
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    }));
  };

  listFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filtredList = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = index => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((contact, i) => i !== index),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem(`contacts`);
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.filtredList();

    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          saveContact={this.saveContact}
          handleInputNameChange={this.handleInputNameChange}
          handleInputNumberChange={this.handleInputNumberChange}
        />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} listFilter={this.listFilter} />

        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
