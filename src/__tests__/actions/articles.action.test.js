import configureStore from 'redux-mock-store';
import {
  searchArticles, postArticle, fetchArticle, fetchAllArticles, updateArticle,
} from '../../actions/articles.action';

const mockStore = configureStore();
const store = mockStore({});
const article = {
  article: {
    title: 'This is a title',
    description: 'This is a description',
    body: 'this is a body',
    tags: ['test', 'tags'],
    slug: 'this-title-test',
  },
};

describe('Test articles actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('send post article action', () => {
    store.dispatch(postArticle(article));
    expect(store.getActions()[0].type).toBe('POST_ARTICLE');
  });

  it('send fetch article action', () => {
    store.dispatch(fetchArticle(article.article.slug));
    expect(store.getActions()[0].type).toBe('FETCH_ARTICLE');
  });

  it('send fetch all articles action', () => {
    store.dispatch(fetchAllArticles());
    expect(store.getActions()[0].type).toBe('FETCH_ALL_ARTICLES');
  });

  it('send update article action', () => {
    store.dispatch(updateArticle(article));
    expect(store.getActions()[0].type).toBe('UPDATE_ARTICLE');
  });

  it('send search article action', () => {
    store.dispatch(searchArticles(article));
    expect(store.getActions()[0].type).toBe('SEARCH');
  });
});
