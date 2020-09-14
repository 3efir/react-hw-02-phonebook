import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContactItem = ({ id, name, number, deleteCallback }) => (
  <li className="contact-item">
    {name}: {number} <button className="contact-item__delete-btn" onClick={() => deleteCallback(id)}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteCallback: PropTypes.func.isRequired,
};

export default ContactItem;
