import React from 'react';
import {
  Row,
  Button,
  Input,
  Card,
  Col,
} from 'react-materialize';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import ResettingPasswordRequest from '../../actions/resetingPassword.action';
import InlineError from '../Messages/InlineError';

export class ResetPasswordForm extends React.Component {
  state = {
    data: {
      password: '',
      confirm: '',
    },
    errors: {},
  };


  onChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const { resetpassword } = this.props;
      const { password } = data;
      const { token } = this.props;
      resetpassword(token, password);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.confirm) errors.password = 'Passwords must match';
    return errors;
  };

  render() {
    const { data } = this.state;
    let { errors } = this.state;
    errors = { ...errors, ...this.props };
    return (
      <Col>
        <Card className="center">
          <h4 className="left">Reset Password</h4>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Input
                label="New Password"
                name="password"
                type="password"
                className={errors ? errors.password && 'invalid' : errors.message && 'invalid'}
                value={data.password}
                s={12}
                onChange={this.onChange}
              />
              <Row>
                <h6 className="left inline-error">{errors.password && <InlineError text={errors.password} />}</h6>
                <h6 className="left inline-error">{errors.message && <InlineError text={errors.message} />}</h6>
                <h6 className="left inline-error">{errors.errors ? errors.errors.length && <InlineError text={errors.errors.toString()} /> : ''}</h6>
              </Row>
            </Row>
            <Row>
              <Input
                label="confirm Password"
                name="confirm"
                type="password"
                className={errors ? errors.password && 'invalid' : errors.message && 'invalid'}
                value={data.confirm}
                s={12}
                onChange={this.onChange}
              />
              <Row>
                <h6 className="left inline-error">{errors.password && <InlineError text={errors.password} />}</h6>
                <h6 className="left inline-error">{errors.message && <InlineError text={errors.message} />}</h6>
                <h6 className="left inline-error">{errors.errors ? errors.errors.length && <InlineError text={errors.errors.toString()} /> : ''}</h6>
              </Row>
            </Row>
            <Button>Submit</Button>
          </form>
        </Card>
      </Col>
    );
  }
}

ResetPasswordForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  resetpassword: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export const mapStateToProps = ({ resetting }) => ({ ...resetting });

export default connect(mapStateToProps, {
  resetpassword: ResettingPasswordRequest,
})(ResetPasswordForm);
