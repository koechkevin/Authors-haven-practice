import { connect } from 'react-redux';
import VerificationComponent from '../../components/Auth/VerificationComponent';
import verification from '../../actions/verification.action';

export const mapStateToProps = ({ verifyReducer }) => ({ ...verifyReducer });

export default connect(mapStateToProps, { verification })(VerificationComponent);
