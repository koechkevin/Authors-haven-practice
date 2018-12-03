import { connect } from 'react-redux';
import { userArticlesAction } from '../../actions/profile.actions';
import UserArticlesComponent from '../../components/Users/UserArticlesComponent';

export const mapStateToProps = ({ userArticlesReducer }) => userArticlesReducer;

export default connect(mapStateToProps, {
  userArticlesAction,
})(UserArticlesComponent);
