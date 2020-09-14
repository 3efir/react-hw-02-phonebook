import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filterCallback }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={(e) => filterCallback(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  filterCallback: PropTypes.func.isRequired,
};

export default Filter;
