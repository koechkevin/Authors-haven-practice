import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {
  updating, successfulUpdate, failedUpdate, updateComment,
} from '../../actions/updateComment.action';

const middlewares = [
  thunkMiddleware,
  promiseMiddleware(),
];

const mockStore = configureStore(middlewares);
const store = mockStore({});
describe('test updating a comment action', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('loads on dispatching updating action', () => {
    store.dispatch(updating());
    const expectedOutput = [{ type: 'UPDATE_COMMENT_LOADING' }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('dispatches successfulUpdate appropriately', () => {
    store.dispatch(successfulUpdate('data'));
    const expectedOutput = [{ data: 'data', type: 'UPDATE_COMMENT_SUCCESS' }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('dispatches an error on fail', () => {
    store.dispatch(failedUpdate(['error']));
    const expected = [{ errors: ['error'], type: 'UPDATE_COMMENT_FAILURE' }];
    expect(store.getActions()).toEqual(expected);
  });

  it('calls update comment', async () => {
    const mock = new MockAdapter(axios);
    const data = {
      comment: {
        body: 'new comment',
      },
    };
    mock.onPut('/api/articles/hi-there/comments/1/', data).reply(200, { data });
    store.dispatch(updateComment('hi-there', 'awesome article'));
    expect(store.getActions()).toEqual([{ type: 'UPDATE_COMMENT_LOADING' }]);
  });
});
