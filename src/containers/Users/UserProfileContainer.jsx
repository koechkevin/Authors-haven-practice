import { connect } from 'react-redux';
import { loadProfile } from '../../actions/profile.actions';
import { logOutAct } from '../../actions/login.action';
import { followUser } from '../../actions/follow.actions';
import ProfileComponent from '../../components/Users/UserProfileComponent';

export const mapStateToProps = ({ profileReducer }) => profileReducer;

export default connect(mapStateToProps, {
  loadProfile,
  logOut: logOutAct,
  followUser,
})(ProfileComponent);
