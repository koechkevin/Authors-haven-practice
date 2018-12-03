import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Alert.scss';

const Alert = ({
  message, options, style, close,
}) => (
  <div className={`alert ${options.style}`} style={{ ...style }}>
    <span style={{ flex: 2 }}>{message}</span>
    <button type="button" onClick={close}>&times;</button>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string,
  options: PropTypes.shape({}),
  style: PropTypes.shape({}),
  close: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  message: '',
  options: {},
  style: {},
};

export default Alert;
