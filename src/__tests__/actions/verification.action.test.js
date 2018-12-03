import configureStore from 'redux-mock-store';
import verify from '../../actions/verification.action';

const mockStore = configureStore();
const store = mockStore({});

describe('verification', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('verify account', () => {
    store.dispatch(verify());
    expect(store.getActions()[0].type).toBe('VERIFY');
  });
});
