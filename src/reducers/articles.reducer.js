import { combineReducers } from 'redux';
import initialState from './initialState';
import constants from '../constants';
import createPromiseReducer from '../utils/createPromiseReducer.util';
import uniqueBySlug from '../utils/uniqueBySlug.util';
import nRandom from '../utils/nRandom.util';

const {
  SEARCH,
  POST_ARTICLE,
  FETCH_ARTICLE,
  UPDATE_ARTICLE,
  FETCH_ALL_ARTICLES,
} = constants;

const postArticle = createPromiseReducer({
  initialState: initialState.article,
  actionName: POST_ARTICLE,
  dataField: 'article',
});

const fetchArticle = createPromiseReducer({
  initialState: initialState.article,
  actionName: FETCH_ARTICLE,
  dataField: 'article',
});

const updateArticle = createPromiseReducer({
  initialState: initialState.article,
  actionName: UPDATE_ARTICLE,
  dataField: 'article',
});

const { allArticles: allArticlesInitialState } = initialState;
const fetchAllArticles = (state = allArticlesInitialState, action) => {
  const { type, payload = {} } = action;
  const { data = {} } = payload;
  const { article } = data;
  switch (type) {
    case `${FETCH_ALL_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FETCH_ALL_ARTICLES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
        articles: {
          ...article,
          results: nRandom(article.results, article.results.length),
          // if in first page, update recent, otherwise keep what we have..
          recent: article.previous
            ? state.articles.recent : article.results.slice(0, 5),
          // banner articles are randomly selected, we also check ensure uniqueness...
          banner: nRandom(
            uniqueBySlug([...state.articles.results, ...article.results]),
            5,
          ),
        },
      };
    case `${FETCH_ALL_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        errors: payload.response,
      };
    default:
      return state;
  }
};

const searchArticles = (state = initialState.search, action) => {
  const { type, payload = {} } = action;
  const { data = {} } = payload;
  const { article: articles } = data;
  switch (type) {
    case `${SEARCH}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case `${SEARCH}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
        articles,
      };
    case `${SEARCH}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  updateArticle,
  postArticle,
  fetchArticle,
  searchArticles,
  fetchAllArticles,
});
