import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import CONSTANTS from '../../constants/index';
import { failedReply, replyComment, replying, successfulReply } from '../../actions/replyComment.action';

describe('test replyComment action dispatches appropriately', () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('updates state when loading', () => {
    store.dispatch(replying());
    const { REPLY_COMMENT_LOADING } = CONSTANTS.COMMENTS;
    expect(store.getActions()[0].type).toEqual(REPLY_COMMENT_LOADING);
  });

  it('dispatches successfully on successful reply', () => {
    store.dispatch(successfulReply('data'));
    const { REPLY_COMMENT_SUCCESS } = CONSTANTS.COMMENTS;
    expect(store.getActions()[0].type).toEqual(REPLY_COMMENT_SUCCESS);
  });

  it('dispatches FAILED_COMMENT_LOADING', () => {
    store.dispatch(failedReply('data'));
    const { REPLY_COMMENT_FAILURE } = CONSTANTS.COMMENTS;
    expect(store.getActions()[0].type).toEqual(REPLY_COMMENT_FAILURE);
  });

  it('fetches and dispatches actions accordingly', () => {
    const mock = new MockAdapter(axios);
    const data = {
      id: 2,
      body: 'body',
    };
    mock.onPost('/articles/hi-there/comments/1/', data).reply(400, { data });
    return store.dispatch(replyComment('hi-there', 1, 'body')).then(() => {
      expect(store.getActions()[0].type).toEqual('REPLY_COMMENT_LOADING');
    });
  });
});
