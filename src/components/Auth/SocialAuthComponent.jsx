import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';


export const buttonsocial = ({ children, triggerLogin, ...props }) => (
  <button type="button" onClick={triggerLogin} {...props}>
    {children}
  </button>
);

const SocialButton = SocialLogin(buttonsocial);

class SocialAuth extends Component {
  state ={
    access_token: '',
    provider: '',
  }

  onSignIn = (payload) => {
    this.setState({ access_token: payload._token.accessToken, provider: payload._provider === 'google' ? 'google-oauth2' : payload._provider }); // eslint-disable-line
    const { SocialAuthAct } = this.props;
    SocialAuthAct(this.state);
  }


  render() {
    const { social } = this.props;
    if (social.resolved) {
      const user = social.userdata;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.replace('/');
      }
    }
    return (

      <div>
        <SocialButton
          className="btn-primary google-button"
          provider="google"
          appId={process.env.REACT_APP_GOOGLE_ID}
          onLoginSuccess={this.onSignIn}
          onLoginFailure={this.onSignIn}
        >
          <span>Login with  </span>
          <FontAwesomeIcon icon={faGoogle} />
        </SocialButton>
        <SocialButton
          className="btn-primary fb-button"
          provider="facebook"
          appId={process.env.REACT_APP_FACEBOOK_ID}
          onLoginSuccess={this.onSignIn}
          onLoginFailure={this.onSignIn}
        >
          <span>Login with </span>
          <FontAwesomeIcon icon={faFacebookF} />
        </SocialButton>
      </div>
    );
  }
}

SocialAuth.propTypes = {
  SocialAuthAct: PropTypes.func.isRequired,
  social: PropTypes.shape({
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    resolved: PropTypes.bool,
    userdata: PropTypes.shape({
      email: PropTypes.string,
      token: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default SocialAuth;
