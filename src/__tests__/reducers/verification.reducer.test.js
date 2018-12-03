import verifyReducer from '../../reducers/verification.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';

const action = { payload: {} };
const { VERIFY } = constants;

describe('verification reducer', () => {
  it('should return the initial state', () => {
    expect(verifyReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle VERIFY_PENDING', () => {
    action.type = `${VERIFY}_PENDING`;
    action.payload = initialState.verify;
    expect(verifyReducer(initialState, action).loading).toEqual(true);
  });

  it('should handle VERIFY_REJECTED', () => {
    action.type = `${VERIFY}_REJECTED`;
    action.payload = initialState.verify;
    expect(verifyReducer(initialState, action).failed).toEqual(true);
  });

  it('should handle VERIFY_FULFILLED', () => {
    action.type = `${VERIFY}_FULFILLED`;
    action.payload = initialState.verify;
    expect(verifyReducer(initialState, action).success).toEqual(true);
  });
});
