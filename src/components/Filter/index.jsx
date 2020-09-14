import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
