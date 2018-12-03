import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import loginAct from '../../actions/login.action';

const mockStore = configureMockStore();
const store = mockStore({});

describe('login', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('login action', () => {
    const credentials = {
      email: 'michaelbasweti.com',
      password: 'lalalala123',
    };
    store.dispatch(loginAct(credentials));
    expect(store.getActions()[0].type).toBe('LOGIN');
  });
});
