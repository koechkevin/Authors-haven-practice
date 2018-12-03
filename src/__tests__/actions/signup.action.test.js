import configureStore from 'redux-mock-store';
import signup from '../../actions/signup.action';

const mockStore = configureStore();
const store = mockStore({});

describe('signup', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('signup action', () => {
    const credentials = {
      username: 'gloria',
      email: 'gloria@gmail.com',
      password: 'Password123',
      confirm_password: 'Password123',
    };
    store.dispatch(signup(credentials));
    expect(store.getActions()[0].type).toBe('SIGNUP');
  });
});
