import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import { getStats } from '../../actions/readingstats.action';

describe('test post readingStats', () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });
  it('tests getStats action', () => {
    store.dispatch(getStats());
    expect(store.getActions()[0].type).toEqual('READSTATS_PENDING');
  });
});
