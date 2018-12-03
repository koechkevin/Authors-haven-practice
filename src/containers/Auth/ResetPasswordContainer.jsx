import { connect } from 'react-redux';
import ResettingPasswordRequest from '../../actions/resetingPassword.action';
import ResetPasswordComponent from '../../components/Auth/ResetPasswordComponent';

export const mapStateToProps = ({ reset }) => ({ ...reset });

export default connect(mapStateToProps, {
  ResettingPasswordRequest,
})(ResetPasswordComponent);
