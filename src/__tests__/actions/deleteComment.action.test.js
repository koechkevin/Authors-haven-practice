import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import {
  deleteComment, successfulDelete, deleting, failedDelete,
} from '../../actions/deleteComment.action';
import CONSTANTS from '../../constants/index';

describe('test delete_comment action', () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches action with type loading', () => {
    store.dispatch(deleting());
    const { DELETE_COMMENT_LOADING } = CONSTANTS.COMMENTS;
    const expectedResult = [{ type: DELETE_COMMENT_LOADING }];
    expect(store.getActions()).toEqual(expectedResult);
  });

  it('dispatches action with type DELETE_COMMENT_SUCCESS', () => {
    store.dispatch(successfulDelete({ data: 'data' }));
    const { DELETE_COMMENT_SUCCESS } = CONSTANTS.COMMENTS;
    const expectedOutput = [{ type: DELETE_COMMENT_SUCCESS, data: { data: 'data' } }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('dispatches action with type DELETE_COMMENT_FAILURE', () => {
    store.dispatch(failedDelete('errors'));
    const { DELETE_COMMENT_FAILURE } = CONSTANTS.COMMENTS;
    const expectedOutput = [{ type: DELETE_COMMENT_FAILURE, errors: 'errors' }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('dispatches appropriate function after receiving request from the api', () => {
    store.dispatch(deleteComment('hi-there', 5));
    expect(store.getActions()).toEqual([{ type: 'DELETE_COMMENT_LOADING' }]);
  });
});
