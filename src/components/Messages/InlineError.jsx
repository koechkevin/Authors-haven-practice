import PropTypes from 'proptypes';
import React from 'react';

const InlineError = ({ text }) => (
  <span style={{ color: '#ae5856', padding: 13 }}>{text}</span>

);

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};
export default InlineError;
