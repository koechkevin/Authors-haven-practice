import constants from '../constants';
import initialState from './initialState';

const { LOAD_FAVE_ARTICLES } = constants;

const favouriteArticlesReducer = (state = initialState.favouriteArticles, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${LOAD_FAVE_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${LOAD_FAVE_ARTICLES}_FULFILLED`:
      return {
        ...state,
        articles: payload.data.articles,
        loading: false,
      };
    case `${LOAD_FAVE_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false,
        errors: payload.response.data.errors,
      };

    default:
      return state;
  }
};

export default favouriteArticlesReducer;
