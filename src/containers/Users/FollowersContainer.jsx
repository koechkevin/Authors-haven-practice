import { connect } from 'react-redux';
import { followersAction, followUser } from '../../actions/follow.actions';
import FollowersComponent from '../../components/Users/FollowersComponent';

export const mapStateToProps = ({ followersReducer }) => followersReducer;

export default connect(mapStateToProps, {
  followersAction,
  followUser,
})(FollowersComponent);
