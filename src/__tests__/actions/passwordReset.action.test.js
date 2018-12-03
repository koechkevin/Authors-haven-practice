import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import resetPasswordRequest from '../../actions/passwordReset.action';
import CONSTANTS from '../../constants/index';
import RESPONSES from '../../mock/responses';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

const { ERROR_ACTION, RESET_PASSWORD_ACTION } = CONSTANTS;

describe('Password reset Action tests', () => {
  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch RESET_PASSWORD_ACTION when reseting password', () => {
    const data = RESPONSES.SUCCESSFUL_EMAIL_RESPONSE;
    store.dispatch(resetPasswordRequest('jymeschege@gmail.com')).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data,
        type: RESET_PASSWORD_ACTION,
      });
    });
  });

  it('should dispatch ERROR_ACTION when reseting password', () => {
    const data = RESPONSES.ERROR_RESET_EMAIL_RESPONSE;
    store.dispatch(resetPasswordRequest('jymeschege@gmail.com')).then(() => {
      expect(store.getActions()).toContainEqual({
        payload: data.user,
        type: ERROR_ACTION,
      });
    });
  });
});
