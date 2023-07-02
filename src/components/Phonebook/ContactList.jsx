import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact, index) => (
        <li key={index}>
          {contact.name}:&nbsp;{contact.number}
          <button
            type="button"
            className={css.btnDelete}
            onClick={() => deleteContact(index)}
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
