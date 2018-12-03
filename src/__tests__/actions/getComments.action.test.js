import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import CONSTANTS from '../../constants/index';
import {
  getComments, failedFetching, successfulFetch, fetchComments,
} from '../../actions/getComments.action';

const middlewares = [
  thunkMiddleware,
  promiseMiddleware(),
];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('test get comments action', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('loads on request', () => {
    store.dispatch(fetchComments());
    const { FETCH_COMMENT_LOADING } = CONSTANTS.COMMENTS;
    const expectedOutput = [{ type: FETCH_COMMENT_LOADING }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('successful fetch action', () => {
    const input = [];
    store.dispatch(successfulFetch(input));
    const { FETCH_COMMENT_SUCCESS } = CONSTANTS.COMMENTS;
    expect(store.getActions()[0].type).toEqual(FETCH_COMMENT_SUCCESS);
  });

  it('updates store with errors on failure', () => {
    store.dispatch(failedFetching('errors found'));
    const { FETCH_COMMENT_FAILURE } = CONSTANTS.COMMENTS;
    const expectedOutput = { errors: 'errors found', type: FETCH_COMMENT_FAILURE };
    expect(store.getActions()[0]).toEqual(expectedOutput);
  });

  it('dispatches an action after successful fetch', () => {
    store.dispatch(getComments('hi-there'));
    expect(store.getActions()).toEqual([{ type: 'FETCH_COMMENT_LOADING' }]);
  });
});
