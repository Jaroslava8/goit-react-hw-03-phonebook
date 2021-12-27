import React from "react";
import PropTypes from "prop-types";
import styles from "../Contacts/Contacts.module.css";

const Contacts = ({ contacts, onDeleteButton }) => {
  return (
    <div className={styles.box}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li className={styles.list} key={contact.id}>
              <div className={styles.contacts}>
                <span className={styles.name}>{contact.name}: </span>
                <span className={styles.tel}>{contact.number}</span>
              </div>
              <button
                className={styles.button}
                type="button"
                id={contact.id}
                onClick={onDeleteButton}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};

