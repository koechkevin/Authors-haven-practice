import expect from 'expect';
import CONSTANTS from '../../constants/index';
import ResettingPasswordReducer from '../../reducers/resettingPassword.reducer';
import RESPONSES from '../../mock/responses';

const initialState = {
  data: {},
  errors: {},
};

const action = { payload: {} };
const {
  RESETTING_ERROR_ACTION,
  RESETTING_PASSWORD_ACTION,
} = CONSTANTS;

describe('Reset Password Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(ResettingPasswordReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle RESET_PASSWORD_ACTION', () => {
    action.type = RESETTING_PASSWORD_ACTION;
    action.payload = RESPONSES.SUCCESSFUL_EMAIL_RESPONSE;
    expect(ResettingPasswordReducer(initialState.data, action).data).toEqual(action.payload);
  });

  it('should handle ERROR_ACTION', () => {
    action.type = RESETTING_ERROR_ACTION;
    action.payload = RESPONSES.ERROR_INVALID_TOKEN;
    expect(ResettingPasswordReducer(initialState.data, action).errors).toEqual(action.payload);
  });
});
