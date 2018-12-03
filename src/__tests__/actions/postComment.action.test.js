import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import CONSTANTS from '../../constants/index';
import {
  successfulPost, postComment, failedPosting, posting,
} from '../../actions/postComment.action';

describe('test post comment', () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches POST_COMMENT_SUCCESSFUL when succesfulPost call', () => {
    store.dispatch(successfulPost('data'));
    const { POST_COMMENT_SUCCESS } = CONSTANTS.COMMENTS;
    expect(store.getActions()).toEqual([{ type: POST_COMMENT_SUCCESS, data: 'data' }]);
  });

  it('calls loading when posting method called', () => {
    store.dispatch(posting());
    const { POST_COMMENT_LOADING } = CONSTANTS.COMMENTS;
    expect(store.getActions()).toEqual([{ type: POST_COMMENT_LOADING }]);
  });

  it('dispatches failed posting error appropriately', () => {
    store.dispatch(failedPosting('errors'));
    const { POST_COMMENT_FAILURE } = CONSTANTS.COMMENTS;
    expect(store.getActions()).toEqual([{ errors: 'errors', type: POST_COMMENT_FAILURE }]);
  });

  it('post comment dispatches appropriate function', () => {
    const mock = new MockAdapter(axios);
    const data = {
      comment: {
        body: 'awesome article',
      },
    };
    mock.onPost('/api/articles/hi-there/comments/', data).reply(200, { data });
    store.dispatch(postComment('hi-there', 1, 'awesome article'));
    expect(store.getActions()).toEqual([]);
  });
});
