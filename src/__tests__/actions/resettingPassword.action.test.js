import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import resetPasswordRequest from '../../actions/resetingPassword.action';
import CONSTANTS from '../../constants/index';
import RESPONSES from '../../mock/responses';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;
const { RESETTING_ERROR_ACTION, RESETTING_PASSWORD_ACTION } = CONSTANTS;

describe('Password reset Action tests', () => {
  const token = 'xaAaddddAD3323@#@$$@%@';
  const password = 'AverysecurePassword';

  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch RESETTING_PASSWORD_ACTION when reseting password', () => {
    const data = RESPONSES.SUCCESSFUL_EMAIL_RESPONSE;
    store.dispatch(resetPasswordRequest(token, password)).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data,
        type: RESETTING_PASSWORD_ACTION,
      });
    });
  });

  it('should dispatch RESETTING_ERROR_ACTION when reseting password', () => {
    const data = RESPONSES.ERROR_INVALID_TOKEN;
    store.dispatch(resetPasswordRequest(token, password)).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data.user.message,
        type: RESETTING_ERROR_ACTION,
      });
    });
  });
});
