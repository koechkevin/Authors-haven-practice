import React from 'react';
import PropTypes from 'proptypes';
import SuccessMessage from '../Messages/SuccessMessage';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

class ForgotPasswordComponent extends React.Component {
  state ={
  };

  render() {
    const { data } = this.props;
    const { user } = data;
    return (
      <div className="container">
        { user ? <SuccessMessage text="Email has been sent" /> : <ForgotPasswordForm /> }
      </div>
    );
  }
}

ForgotPasswordComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ForgotPasswordComponent;
