import { connect } from 'react-redux/';
import resetPasswordRequest from '../../actions/passwordReset.action';
import ForgotPasswordComponent from '../../components/Auth/ForgotPasswordComponent';

export const mapStateToProps = ({ reset }) => ({ ...reset });

export default connect(mapStateToProps, {
  resetPasswordRequest,
})(ForgotPasswordComponent);
