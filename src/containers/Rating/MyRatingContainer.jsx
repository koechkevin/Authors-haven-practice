import { connect } from 'react-redux';
import { rateArticleAction, getRatings } from '../../actions/rating.action';
import MyRating from '../../components/Rating/MyRatingComponent';

export const mapStateToProps = state => ({
  averageRating: state.ratingReducer.averageRating,
  rating: state.ratingReducer.rating,
  ratingError: state.ratingReducer.ratingError,
});

export default connect(mapStateToProps, { getRatings, rateArticleAction })(MyRating);
