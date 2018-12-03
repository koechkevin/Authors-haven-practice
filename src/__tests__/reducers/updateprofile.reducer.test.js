import updateProfileReducer from '../../reducers/updateProfile.reducer';
import initialState from '../../reducers/initialState';
import constants from '../../constants';

const { UPDATE_PROFILE } = constants;

const action = { payload: {} };

describe('update profile reducer', () => {
  it('should return the initial state', () => {
    const reducer = updateProfileReducer;
    const InitialState = updateProfileReducer.initialState;
    expect(reducer(InitialState, {}))
      .toEqual({ errors: {}, loading: false, success: false, userProfile: {} });
  });

  it('should handle UPDATE_PROFILE_PENDING', () => {
    action.type = `${UPDATE_PROFILE}_PENDING`;
    action.payload = initialState.updateProfile;
    expect(updateProfileReducer(initialState.updateProfile, action).loading).toEqual(true);
  });

  it('should handle UPDATE_PROFILE_FULFILLED', () => {
    action.type = `${UPDATE_PROFILE}_FULFILLED`;
    action.payload = {
      success: true,
    };
    expect(updateProfileReducer(initialState.updateProfile, action).success).toEqual(true);
  });

  it('should handle UPDATE_PROFILE_REJECTED', () => {
    action.type = `${UPDATE_PROFILE}_REJECTED`;
    action.payload = {
      response: {
        data: {},
      },
    };
    expect(updateProfileReducer(initialState.updateProfile, action).success).toEqual(false);
  });
});
