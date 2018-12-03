import constants from '../../constants';
import articlesReducer from '../../reducers/articles.reducer';
import state from '../../reducers/initialState';

const initialState = {
  updateArticle: state.article,
  postArticle: state.article,
  fetchArticle: state.article,
  fetchAllArticles: state.allArticles,
};
const { SEARCH, POST_ARTICLE, FETCH_ALL_ARTICLES } = constants;

const action = { payload: {} };

describe('Test post articles reducer', () => {
  it('should return the initial state with no action', () => {
    expect(articlesReducer(initialState, action).postArticle).toEqual(state.article);
  });

  it('should handle POST_ARTICLE_PENDING', () => {
    action.type = `${POST_ARTICLE}_PENDING`;
    action.payload = state.article;
    expect(articlesReducer(initialState, action).postArticle.loading).toEqual(true);
  });

  it('should handle POST_ARTICLE_FULFILLED', () => {
    action.type = `${POST_ARTICLE}_FULFILLED`;
    action.payload.data = state.article;
    expect(articlesReducer(initialState, action).postArticle.success).toEqual(true);
  });

  it('should handle POST_ARTICLE_REJECTED', () => {
    action.type = `${POST_ARTICLE}_REJECTED`;
    action.payload.response = state.article;
    expect(articlesReducer(initialState, action).postArticle.success).toEqual(false);
  });

  it('should handle FETCH_ALL_ARTICLES', () => {
    action.type = `${FETCH_ALL_ARTICLES}_PENDING`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'a' }, { slug: 'b' }],
        },
      },
    };
    expect(articlesReducer(initialState, action).fetchAllArticles.articles.recent).toEqual([]);
  });

  it('should handle FETCH_ALL_ARTICLES_FULFILLED', () => {
    action.type = `${FETCH_ALL_ARTICLES}_FULFILLED`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'a' }, { slug: 'b' }],
        },
      },
    };
    expect(
      articlesReducer(initialState, action).fetchAllArticles.articles.recent,
    ).toEqual([{ slug: 'a' }, { slug: 'b' }]);
  });

  it('should handle FETCH_ALL_ARTICLES_REJECTED', () => {
    action.type = `${FETCH_ALL_ARTICLES}_REJECTED`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'a' }, { slug: 'b' }],
        },
      },
    };
    expect(articlesReducer(initialState, action).fetchAllArticles.success).toEqual(false);
  });

  it('should handle SEARCH', () => {
    action.type = `${SEARCH}_PENDING`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'a' }, { slug: 'b' }],
        },
      },
    };
    expect(articlesReducer(initialState, action).searchArticles.articles).toEqual({ results: [] });
  });

  it('should handle SEARCH_FULFILLED', () => {
    action.type = `${SEARCH}_FULFILLED`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'a' }, { slug: 'b' }],
        },
      },
    };
    expect(
      articlesReducer(initialState, action).searchArticles.articles,
    ).toEqual({ results: [{ slug: 'a' }, { slug: 'b' }] });
  });

  it('should handle SEARCH_REJECTED', () => {
    action.type = `${SEARCH}_REJECTED`;
    action.payload = {
      data: {
        article: {
          results: [{ slug: 'a' }, { slug: 'b' }],
        },
      },
    };
    expect(articlesReducer(initialState, action).searchArticles.success).toEqual(false);
  });
});
