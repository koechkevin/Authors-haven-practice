import userArticlesReducer from '../../reducers/userArticles.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';

const { LOAD_USER_ARTICLES } = constants;

const action = { payload: {} };

describe('favorite articles reducer', () => {
  it('should return the initial state', () => {
    const reducer = userArticlesReducer;
    const InitialState = userArticlesReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, articles: [] });
  });

  it('should handle LOAD_USER_ARTICLES_PENDING', () => {
    action.type = `${LOAD_USER_ARTICLES}_PENDING`;
    action.payload = initialState.userArticles;
    expect(userArticlesReducer(initialState.userArticles, action).loading).toEqual(true);
  });

  it('should handle LOAD_USER_ARTICLES_FULFILLED', () => {
    action.type = `${LOAD_USER_ARTICLES}_FULFILLED`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'x' }],
        },
      },
    };
    expect(userArticlesReducer(initialState.userArticles, action).articles).toEqual([{ slug: 'x' }]);
  });

  it('should handle LOAD_USER_ARTICLES_REJECTED', () => {
    action.type = `${LOAD_USER_ARTICLES}_REJECTED`;
    action.payload = {
      response: {
        data: {},
      },
    };
    expect(userArticlesReducer(initialState.userArticles, action).articles).toEqual([]);
  });
});
