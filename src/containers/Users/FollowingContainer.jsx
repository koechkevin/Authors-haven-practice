import { connect } from 'react-redux';
import { followingAction, followUser } from '../../actions/follow.actions';
import FollowingComponent from '../../components/Users/FollowingComponent';

export const mapStateToProps = ({ followingReducer }) => followingReducer;

export default connect(mapStateToProps, {
  followingAction,
  followUser,
})(FollowingComponent);
