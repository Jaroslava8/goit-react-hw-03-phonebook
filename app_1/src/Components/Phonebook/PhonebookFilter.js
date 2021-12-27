import React from "react";
import PropTypes from "prop-types";
import styles from "../Phonebook/PhonebookFilter.module.css";

class PhonebookFilter extends React.Component {
  state = { value: "" };

  handleFilter = (event) => {
    this.setState({ value: event.currentTarget.value });
    this.props.onFiltred(event.currentTarget.value);
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <h2 className={styles.title}>Contacts</h2>
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            onChange={this.handleFilter}
            value={value}
            type="text"
            name="filter"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>
      </>
    );
  }
}
export default PhonebookFilter;

PhonebookFilter.propTypes = { onFiltred: PropTypes.func.isRequired };
