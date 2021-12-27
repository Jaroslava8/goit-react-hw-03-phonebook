import React from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./Components/Form/Form";
import Contacts from "./Components/Contacts/Contacts";
import PhonebookFilter from "./Components/Phonebook/PhonebookFilter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const enterName = this.state.contacts.map((contact) => {
      return contact.name;
    });

    enterName.includes(name)
      ? alert(`${name}  is already in your Phonebook `)
      : this.setState((prevState) => ({
          name,
          number,
          contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
        }));
  };

  filterContacts = (filterEntry) => {
    this.setState({ filter: filterEntry });
  };

  removeExistContact = (e) => {
    const deleteExistContact = this.state.contacts.findIndex((element) => {
      return element.id === e.currentTarget.id;
    });

    this.state.contacts.splice(deleteExistContact, 1);
    this.setState({ contacts: this.state.contacts });
    // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  componentDidMount() {
    if (localStorage.contacts) {
      const LStorageContacts = JSON.parse(localStorage.getItem("contacts"));
      this.setState({ contacts: LStorageContacts });
    }
  
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }
  render() {
  
    const { addContact, filterContacts, removeExistContact } = this;
    const { contacts, filter } = this.state;
    const normalizeToLowCase = filter.toLowerCase();
    const filteredToLowCase = contacts.filter((cont) => {
      return cont.name.toLowerCase().includes(normalizeToLowCase);
    });

    return (
      <>
        <Form whenSubmit={addContact} />
        <PhonebookFilter onFiltred={filterContacts} />
        <Contacts
          contacts={filteredToLowCase}
          onDeleteButton={removeExistContact}
        />
      </>
    );
  }
}

export default App;
