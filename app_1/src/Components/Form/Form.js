import React from "react";
import PropTypes from "prop-types";
import styles from "../Form/Form.module.css";

class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleValue = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleName = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.whenSubmit(name, number);
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  render() {
    const { handleName, handleValue } = this;
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <form className={styles.form} name="phoneBook" onSubmit={handleName}>
          <label className={styles.name}>
            Name
            <input
              className={styles.inputName}
              onChange={handleValue}
              value={this.state.name}
              type="text"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={styles.number}>
            Number
            <input
              className={styles.input}
              onChange={this.handleValue}
              value={this.state.number}
              type="tel"
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={styles.formButton} type="submit">
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = { whenSubmit: PropTypes.func.isRequired };
