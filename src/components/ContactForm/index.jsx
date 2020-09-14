import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  onAddContact = (evt) => {
    evt.preventDefault();
    if (!this.state.name.trim() || !this.state.number.trim()) {
      alert('Fields Name and Number are required!');
      return false;
    }
    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  }

  onChangeName = (evt) => {
    this.setState({ name: evt.target.value });
  }

  onChangeNumber = (evt) => {
    this.setState({ number: evt.target.value });
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.onAddContact}>
        <label className="contact-form__label">
          Name
          <input
            className="contact-form__text-input"
            type="text"
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </label>

        <label className="contact-form__label">
          Number
          <input
            className="contact-form__text-input"
            type="text"
            value={this.state.number}
            onChange={this.onChangeNumber}
          />
        </label>

        <button
          className="contact-form__submit-btn"
        >
          Add contact
        </button>
      </form>
    );
  }
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
