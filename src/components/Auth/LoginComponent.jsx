import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loader from '../../assets/img/loader.svg';
import Sociallogin from '../../containers/Auth/SocialAuthContainer';

class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
    token: '',
    onFulfilled: false,
    onPending: true,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    login(this.state);
  };

  render() {
    const { logindata, onLogin } = this.props;
    let emailerr = '';
    let passerr = '';
    let notExist = '';

    if (logindata.onFulfilled) {
      const { user } = logindata.data.data;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        onLogin();
      }
    }

    if (logindata.onRejected) {
      const { errors } = logindata.errors.response.data;

      emailerr = errors.email;
      passerr = errors.password;
      notExist = errors.error;
    }

    const { email, password } = this.state;
    return (
      <div className="center" onSubmit={this.onSubmit}>
        <form>
          <div className="">
            <span className="center-align"><h5>Sign In</h5></span>
            <div className="row">
              {notExist
                && <div className="alert-err">{notExist[0]}</div>
              }
              <div className="input-field col s12">
                <input
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  value={email}
                  required
                />
                {emailerr
                  && <div className="alert-err">{emailerr[0]}</div>
                }
              </div>
              <div className="col s12">
                <input
                  placeholder="Enter password"
                  id="MyPass"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  required
                />
                {passerr
                  && <div className="alert-err">{passerr[0]}</div>
                }
              </div>
            </div>
          </div>
          <div className="center-align">
            <Link className="teal-text" to="/forgot_password"><b>Forgot Password?</b></Link>
          </div>

          <div className="center-align">
            {logindata.onPending ? (
              <img className="loader" src={loader} alt="loader" />
            ) : (
              <input type="submit" value="Login" className="btn-primary" onClick={this.onSubmit} />
            )
            }
            <span className="center-align"><h6>or</h6></span>
            <Sociallogin />
          </div>
        </form>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  logindata: PropTypes.object,
  onLogin: PropTypes.func,
};

LoginComponent.defaultProps = {
  logindata: {},
  onLogin: () => {},
};

export default LoginComponent;
