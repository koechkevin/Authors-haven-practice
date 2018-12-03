import constants from '../constants';
import initialState from './initialState';

const { LOAD_USER_ARTICLES } = constants;

const userArticlesReducer = (state = initialState.userArticles, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${LOAD_USER_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${LOAD_USER_ARTICLES}_FULFILLED`:
      return {
        ...state,
        articles: payload.data.article.results,
        loading: false,
      };
    case `${LOAD_USER_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false,
        errors: payload.response.data.errors,
      };

    default:
      return state;
  }
};

export default userArticlesReducer;
