import React from 'react';
import { Row, Button, Input, Card, Col } from 'react-materialize';
import isEmail from 'validator/lib/isEmail';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import InlineError from '../Messages/InlineError';
import resetPasswordRequest from '../../actions/passwordReset.action';

class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      email: '',
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
      const { resetPassword } = this.props;
      resetPassword(data);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    return errors;
  };

  render() {
    const myprops = { ...this.props };
    const { data } = this.state;
    let { errors } = this.state;
    errors = { ...errors, ...myprops.errors };
    return (
      <Col>
        <Card className="center forgot">
          <h4 className="left">Request password reset link</h4>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Input
                label="email"
                name="email"
                className={errors ? errors.email && 'invalid' : errors.message && 'invalid'}
                value={data.email}
                s={12}
                onChange={this.onChange}
              />
              <Row>
                <h6 className="left inline-error">{ errors.email && <InlineError text={errors.email} />}</h6>
                <h6 className="left">{ errors.message && <InlineError text={errors.message} />}</h6>
              </Row>
            </Row>
            <Button>Submit</Button>
          </form>
        </Card>
      </Col>
    );
  }
}

ForgotPasswordForm.propTypes = {
  resetPassword: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ reset }) => ({ ...reset });

export default connect(mapStateToProps, {
  resetPassword: resetPasswordRequest,
})(ForgotPasswordForm);
