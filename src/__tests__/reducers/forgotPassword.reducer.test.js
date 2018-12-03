import expect from 'expect';
import CONSTANTS from '../../constants/index';
import restRequest from '../../reducers/resetPassword.reducer';
import RESPONSES from '../../mock/responses';

const initialState = {
  data: {},
  errors: {},
};

const action = { payload: {} };
const { RESET_PASSWORD_ACTION, ERROR_ACTION } = CONSTANTS;

describe('Reset Password Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(restRequest(initialState, action)).toEqual(initialState);
  });

  it('should handle RESET_PASSWORD_ACTION', () => {
    action.type = RESET_PASSWORD_ACTION;
    action.payload = RESPONSES.SUCCESSFUL_EMAIL_RESPONSE;
    expect(restRequest(initialState.data, action).data).toEqual(action.payload);
  });

  it('should handle ERROR_ACTION', () => {
    action.type = ERROR_ACTION;
    action.payload = RESPONSES.ERROR_RESET_EMAIL_RESPONSE;
    expect(restRequest(initialState.data, action).errors).toEqual(action.payload);
  });
});
