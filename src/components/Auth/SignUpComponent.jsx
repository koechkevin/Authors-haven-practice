import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';
import loader from '../../assets/img/loader.svg';

class SignUpComponent extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  onSignUp = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      const { signup } = this.props;
      signup(this.state);
    } else {
      this.setState({ passwordError: 'Passwords don\'t match.' });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { success, loading, error } = this.props;
    const { errors } = error ? error.response.data : { errrors: '' };
    const {
      username, email, password, confirmPassword, passwordError,
    } = this.state;
    return (
      <div className="centered">
        <h5 className="title">Create Account</h5>
        {success ? <Redirect to="/signup/success" /> : null}
        <form onSubmit={this.onSignUp} className="center-align">
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            defaultValue={username}
            type="text"
            minLength="6"
            required
          />
          {errors
              && <div className="alert-err">{errors.username}</div>
            }

          <input
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            defaultValue={email}
            type="email"
            required
          />
          {errors
              && <div className="alert-err">{errors.email}</div>
            }

          <input
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            defaultValue={password}
            type="password"
            icon="lock"
            minLength="8"
            required
          />
          {errors
              && <div className="alert-err">{errors.password}</div>
            }

          <input
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={this.handleChange}
            defaultValue={confirmPassword}
            type="password"
            minLength="8"
            icon="lock"
            required
          />
          <div className="alert-err">{passwordError}</div>
          {loading
            ? (
              <img className="loader" src={loader} alt="loader" />
            ) : (
              <input type="submit" value="Sign Up" className="btn-primary" />
            )}
        </form>
      </div>
    );
  }
}

SignUpComponent.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.shape({}).isRequired,
  success: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignUpComponent;
