import followingReducer from '../../reducers/following.reducer';
import initialState from '../../reducers/initialState';
import constants from '../../constants';

const { FOLLOWING } = constants;

const action = { payload: [] };

describe('Following reducer', () => {
  it('should return the initial state', () => {
    const reducer = followingReducer;
    const InitialState = followingReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, success: false, following: [] });
  });

  it('should handle FOLLOWING_PENDING', () => {
    action.type = `${FOLLOWING}_PENDING`;
    expect(followingReducer(initialState.following, action).loading).toEqual(true);
  });

  it('should handle FOLLOWING_FULFILLED', () => {
    action.type = `${FOLLOWING}_FULFILLED`;
    action.payload = {
      success: true,
    };
    expect(followingReducer(initialState.following, action).success).toEqual(true);
  });

  it('should handle FOLLOWING_REJECTED', () => {
    action.type = `${FOLLOWING}_REJECTED`;
    action.payload = {
      success: false,
    };
    expect(followingReducer(initialState.following, action).success).toEqual(false);
  });
});
