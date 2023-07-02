import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.name}>
          {contact.name}:&nbsp;{contact.number}
          <button
            type="button"
            className={css.btnDelete}
            onClick={() => deleteContact(contact.name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
