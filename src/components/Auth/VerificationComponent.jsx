import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class VerificationComponent extends Component {
  componentDidMount() {
    const { verification, match } = this.props;
    verification(match.params.token);
  }

  render() {
    const { success, loading } = this.props;
    let message = 'Ooops! Something went wrong...';
    if (success) {
      message = '';
    } else if (loading) {
      message = 'loading...';
    } else {
      message = 'Ooops! Something went wrong...';
    }

    return (
      <div className="verification">
        {message === '' ? <Redirect to="/users/login" /> : message}
      </div>
    );
  }
}

VerificationComponent.propTypes = {
  success: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  verification: PropTypes.func.isRequired,
  match: PropTypes.string.isRequired,
};

export default VerificationComponent;
