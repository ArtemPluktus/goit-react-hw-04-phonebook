import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const ContactForm = ({
  name,
  number,
  saveContact,
  handleInputNameChange,
  handleInputNumberChange,
}) => {
  return (
    <form action="" className={css.form} onSubmit={saveContact}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputNameChange}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputNumberChange}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  saveContact: PropTypes.func.isRequired,
  handleInputNameChange: PropTypes.func.isRequired,
  handleInputNumberChange: PropTypes.func.isRequired,
};
