import profileReducer from '../../reducers/profile.reducer';
import initialState from '../../reducers/initialState';
import profile from '../../mock/profile';
import constants from '../../constants';

const { LOAD_PROFILE, FOLLOW_USER, UNFOLLOW_USER } = constants;

const action = { payload: {} };

describe('profile reducer', () => {
  it('should return the initial state', () => {
    const reducer = profileReducer;
    const InitialState = profileReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, success: false, profile: {} });
  });

  it('should handle LOAD_PROFILE_PENDING', () => {
    action.type = `${LOAD_PROFILE}_PENDING`;
    action.payload.results = profile;
    expect(profileReducer(initialState.userProfile, action).profile).toEqual({});
    expect(profileReducer(initialState.userProfile, action).loading).toEqual(true);
  });

  it('should handle LOAD_PROFILE_FULFILLED', () => {
    action.type = `${LOAD_PROFILE}_FULFILLED`;
    action.payload.data = profile;
    expect(profileReducer(initialState.userProfile, action).profile)
      .toEqual(action.payload.data.profile);
    expect(profileReducer(initialState.userProfile, action).loading).toEqual(false);
  });

  it('should handle FOLLOW_USER_FULFILLED', () => {
    action.type = `${FOLLOW_USER}_FULFILLED`;
    expect(profileReducer(initialState.userProfile, action).followSuccess).toEqual(true);
  });

  it('should handle UNFOLLOW_USER_FULFILLED', () => {
    action.type = `${UNFOLLOW_USER}_FULFILLED`;
    expect(profileReducer(initialState.userProfile, action).followSuccess).toEqual(true);
  });

  it('should handle LOAD_PROFILE_REJECTED', () => {
    action.type = `${LOAD_PROFILE}_REJECTED`;
    action.payload = {
      response: {
        data: {},
      },
    };
    expect(profileReducer(initialState.userProfile, action).profile)
      .toEqual({});
    expect(profileReducer(initialState.userProfile, action).loading).toEqual(false);
  });
});
