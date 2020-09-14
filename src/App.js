import React, { Component } from 'react';
import './App.scss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleAddContact = (name, number) => {
    if ( -1 !== this.state.contacts.findIndex((item) => item.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    this.setState({
      contacts: [...this.state.contacts, { id: uuidv4(), name, number }],
    });
  }

  handleFilterChange = (text) => {
    this.setState({ filter: text });
  }

  handleDeleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== id)
    });
  }

  getFilteredList = () => {
    return (
      this.state.filter ?
      this.state.contacts.filter((item) => item.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())) :
      this.state.contacts
    );
  }

  render() {
    return (
      <div className="app-root">
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.handleAddContact}
        />

        <h1>Contacts</h1>
        <Filter
          filterCallback={this.handleFilterChange}
        />
        <ContactList
          list={this.getFilteredList()}
          deleteCallback={this.handleDeleteContact}
        />
      </div>
    )
  }
}

export default App;
