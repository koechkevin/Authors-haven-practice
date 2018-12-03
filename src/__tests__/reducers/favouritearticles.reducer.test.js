import favouriteArticlesReducer from '../../reducers/favouriteArticles.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';

const { LOAD_FAVE_ARTICLES } = constants;

const action = { payload: {} };

describe('favorite articles reducer', () => {
  it('should return the initial state', () => {
    const reducer = favouriteArticlesReducer;
    const InitialState = favouriteArticlesReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, articles: [] });
  });

  it('should handle LOAD_FAVE_ARTICLES_PENDING', () => {
    action.type = `${LOAD_FAVE_ARTICLES}_PENDING`;
    action.payload = initialState.favouriteArticles;
    expect(favouriteArticlesReducer(initialState, action).loading).toEqual(true);
  });

  it('should handle LOAD_FAVE_ARTICLES_FULFILLED', () => {
    action.type = `${LOAD_FAVE_ARTICLES}_FULFILLED`;
    action.payload = {
      data: {
        articles: [{ slug: 'x' }],
      },
    };
    expect(favouriteArticlesReducer(initialState.favouriteArticles, action).articles).toEqual([{ slug: 'x' }]);
  });

  it('should handle LOAD_FAVE_ARTICLES_REJECTED', () => {
    action.type = `${LOAD_FAVE_ARTICLES}_REJECTED`;
    action.payload = {
      response: {
        data: {},
      },
    };
    expect(favouriteArticlesReducer(initialState.favouriteArticles, action).articles).toEqual([]);
  });
});
