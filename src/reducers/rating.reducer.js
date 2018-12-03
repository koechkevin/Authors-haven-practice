import initialState from './initialState';
import CONSTANTS from '../constants';

const { RATE_ARTICLE, AVERAGE_RATING, RATING_ERROR } = CONSTANTS;

const ratingReducer = (state = initialState.rating, action) => {
  switch (action.type) {
    case RATE_ARTICLE:
      return {
        ...state,
        averageRating: action.payload.averageRating,
        rating: action.payload.rating,
      };
    case AVERAGE_RATING:
      return {
        ...state,
        averageRating: action.payload.averageRating,
      };
    case RATING_ERROR:
      return {
        ...state,
        ratingError: action.payload.ratingError,
      };
    default:
      return state;
  }
};

export default ratingReducer;
