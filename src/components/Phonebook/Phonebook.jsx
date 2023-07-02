import { useState, useMemo, useEffect } from 'react';
import css from './Phonebook.module.css';
import { ContactForm } from './ContactForm.jsx';
import { Filter } from './Filter.jsx';
import { ContactList } from './ContactList';

export function Phonebook() {
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];

  const [contacts, setContacts] = useState(initialContacts);
  const [name, setName] = useState(``);
  const [number, setNumber] = useState(``);
  const [filter, setFilter] = useState(``);

  const handleInputNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleInputNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const saveContact = e => {
    e.preventDefault();

    for (let el of contacts) {
      if (el.name === name) {
        return alert(`${name} is already in contacts`);
      }
    }

    setContacts([...contacts, { name, number }]);
    setName('');
    setNumber('');
  };

  const listFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filtredList = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  const deleteContact = arg => {
    setContacts(state => contacts.filter(contact => contact.name !== arg));
  };

  useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        saveContact={saveContact}
        handleInputNameChange={handleInputNameChange}
        handleInputNumberChange={handleInputNumberChange}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} listFilter={listFilter} />

      <ContactList
        filteredContacts={filtredList}
        deleteContact={deleteContact}
      />
    </div>
  );
}
