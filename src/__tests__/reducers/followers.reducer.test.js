import followersReducer from '../../reducers/followers.reducer';
import initialState from '../../reducers/initialState';
import constants from '../../constants';

const { FOLLOWERS } = constants;

const action = { payload: [] };

describe('followers reducer', () => {
  it('should return the initial state', () => {
    const reducer = followersReducer;
    const InitialState = followersReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, success: false, followers: [] });
  });

  it('should handle FOLLOWERS_PENDING', () => {
    action.type = `${FOLLOWERS}_PENDING`;
    expect(followersReducer(initialState.followers, action).loading).toEqual(true);
  });

  it('should handle FOLLOWERS_FULFILLED', () => {
    action.type = `${FOLLOWERS}_FULFILLED`;
    action.payload = {
      success: true,
    };
    expect(followersReducer(initialState.followers, action).success).toEqual(true);
  });

  it('should handle FOLLOWERS_REJECTED', () => {
    action.type = `${FOLLOWERS}_REJECTED`;
    action.payload = {
      success: false,
    };
    expect(followersReducer(initialState.followers, action).success).toEqual(false);
  });
});
