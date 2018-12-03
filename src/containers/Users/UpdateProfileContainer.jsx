import { connect } from 'react-redux';
import { updateProfileAction, loadProfile } from '../../actions/profile.actions';
import UpdateProfileComponent from '../../components/Users/UpdateProfileComponent';

export const mapStateToProps = ({ updateProfileReducer, profileReducer }) => ({
  updateProfileReducer,
  profileReducer,
});

export default connect(mapStateToProps, {
  updateProfileAction,
  loadProfile,
})(UpdateProfileComponent);
