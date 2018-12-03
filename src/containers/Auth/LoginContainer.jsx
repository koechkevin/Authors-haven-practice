import { connect } from 'react-redux';
import login from '../../actions/login.action';
import LoginComponent from '../../components/Auth/LoginComponent';

const mapStateToProps = state => ({
  logindata: state.loginReducer,
});


export default connect(
  mapStateToProps,
  { login },
)(LoginComponent);
