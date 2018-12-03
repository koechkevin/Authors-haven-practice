import LikeDislikeReducer from '../../reducers/likedislike.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';
import data from '../../mock/likedislike';

const action = { payload: {} };
const { LIKE_DISLIKE } = constants;

describe('test likedislike reducer', () => {
  it('should return the initial state', () => {
    expect(LikeDislikeReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle LIKE_DISLIKE_REJECTED', () => {
    action.type = `${LIKE_DISLIKE}_REJECTED`;
    action.payload = initialState.likedislike;
    expect(LikeDislikeReducer(initialState, action).rejected).toEqual(true);
  });

  it('should handle FAVOURITE_FULFILLED', () => {
    action.type = `${LIKE_DISLIKE}_FULFILLED`;
    action.payload = data;
    expect(LikeDislikeReducer(initialState, action).resolved).toEqual(true);
  });
});
