import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className="contact-item">
    {name}: {number} <button className="contact-item__delete-btn" onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
