import { connect } from 'react-redux';
import { favouriteArticlesAction } from '../../actions/profile.actions';
import FavouriteArticlesComponent from '../../components/Users/FavouriteArticlesComponent';

export const mapStateToProps = ({ favouriteArticlesReducer }) => favouriteArticlesReducer;

export default connect(mapStateToProps, {
  favouriteArticlesAction,
})(FavouriteArticlesComponent);
