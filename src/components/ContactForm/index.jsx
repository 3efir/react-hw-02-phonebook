import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.name.trim() || !this.state.number.trim()) {
      alert('Fields Name and Number are required!');
      return false;
    }
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  }

  handleChangeName = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handleChangeNumber = (evt) => {
    this.setState({ number: evt.target.value });
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleFormSubmit}>
        <label className="contact-form__label">
          Name
          <input
            className="contact-form__text-input"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </label>

        <label className="contact-form__label">
          Number
          <input
            className="contact-form__text-input"
            type="text"
            value={this.state.number}
            onChange={this.handleChangeNumber}
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
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
