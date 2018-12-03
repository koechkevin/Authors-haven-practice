import configureStore from 'redux-mock-store';
import {
  followersAction,
  followingAction,
} from '../../actions/follow.actions';

const mockStore = configureStore();
const store = mockStore({});

describe('Follow Action tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('followers loading action', () => {
    store.dispatch(followersAction());
    expect(store.getActions()[0].type).toBe('FOLLOWERS');
  });

  it('following loading action', () => {
    store.dispatch(followingAction());
    expect(store.getActions()[0].type).toBe('FOLLOWING');
  });
});
