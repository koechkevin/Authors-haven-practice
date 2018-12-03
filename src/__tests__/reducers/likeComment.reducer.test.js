import { likeComment } from '../../reducers/commentLike.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';

const action = { payload: {} };
const { LIKE_COMMENT, UNLIKE_COMMENT } = constants;

describe('test bookmarking reducer', () => {
  it('should return the initial state', () => {
    expect(likeComment(initialState, {})).toEqual(initialState);
  });

  it('should handle LIKE_COMMENT_REJECTED', () => {
    action.type = `${LIKE_COMMENT}_REJECTED`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).success).toEqual(false);
  });

  it('should handle LIKE_COMMENT_FULFILLED', () => {
    action.type = `${LIKE_COMMENT}_FULFILLED`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).success).toEqual(true);
  });

  it('should handle UNLIKE_COMMENT_FULFILLED', () => {
    action.type = `${UNLIKE_COMMENT}_FULFILLED`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).success).toEqual(true);
  });

  it('should handle UNLIKE_COMMENT_REJECTED', () => {
    action.type = `${UNLIKE_COMMENT}_REJECTED`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).success).toEqual(false);
  });

  it('should handle UNLIKE_COMMENT_PENDING', () => {
    action.type = `${UNLIKE_COMMENT}_PENDING`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).loading).toEqual(true);
  });

  it('should handle UNLIKE_COMMENT_PENDING', () => {
    action.type = `${UNLIKE_COMMENT}_PENDING`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).loading).toEqual(true);
  });

  it('should handle LIKE_COMMENT_PENDING', () => {
    action.type = `${LIKE_COMMENT}_PENDING`;
    action.payload = initialState.commentLikeinit;
    expect(likeComment(initialState, action).loading).toEqual(true);
  });
});
