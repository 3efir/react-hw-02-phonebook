import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul>
      {list.map((item) => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
