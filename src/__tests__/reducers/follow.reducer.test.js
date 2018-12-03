import followReducer from '../../reducers/follow.reducer';
import initialState from '../../reducers/initialState';
import constants from '../../constants';

const { FOLLOW_USER, UNFOLLOW_USER } = constants;

const action = { payload: {} };

describe('Follow reducer', () => {
  it('should return the initial state', () => {
    const reducer = followReducer;
    const InitialState = followReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, success: false, followed: false });
  });

  it('should handle FOLLOW_USER_PENDING', () => {
    action.type = `${FOLLOW_USER}_PENDING`;
    expect(followReducer(initialState.followUser, action).loading).toEqual(true);
  });

  it('should handle FOLLOW_USER_FULFILLED', () => {
    action.type = `${FOLLOW_USER}_FULFILLED`;
    expect(followReducer(initialState.followUser, action).loading).toEqual(false);
  });

  it('should handle FOLLOW_USER_REJECTED', () => {
    action.type = `${FOLLOW_USER}_REJECTED`;
    expect(followReducer(initialState.followUser, action).success).toEqual(false);
  });

  it('should handle UNFOLLOW_USER_PENDING', () => {
    action.type = `${UNFOLLOW_USER}_PENDING`;
    expect(followReducer(initialState.followUser, action).loading).toEqual(true);
  });

  it('should handle UNFOLLOW_USER_FULFILLED', () => {
    action.type = `${UNFOLLOW_USER}_FULFILLED`;
    expect(followReducer(initialState.followUser, action).loading).toEqual(false);
  });

  it('should handle UNFOLLOW_USER_REJECTED', () => {
    action.type = `${UNFOLLOW_USER}_REJECTED`;
    expect(followReducer(initialState.followUser, action).success).toEqual(false);
  });
});
