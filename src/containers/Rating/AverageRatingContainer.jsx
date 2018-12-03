import { connect } from 'react-redux';
import AverageRating from '../../components/Rating/AverageRatingComponent';

export const mapStateToProps = state => ({
  averageRating: state.ratingReducer.averageRating,
});

export default connect(mapStateToProps)(AverageRating);
