import constants from '../constants/index';
import initialState from './initialState';

const { LIKE_COMMENT, UNLIKE_COMMENT, FETCH_COMMENT } = constants;

export const likeComment = (state = initialState.commentLikeinit, action) => {
  switch (action.type) {
    case `${LIKE_COMMENT}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${UNLIKE_COMMENT}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${LIKE_COMMENT}_FULFILLED`:
      return {
        ...state,
        success: true,
        liked: true,
      };
    case `${UNLIKE_COMMENT}_FULFILLED`:
      return {
        ...state,
        success: true,
        liked: false,
      };
    case `${LIKE_COMMENT}_REJECTED`:
      return {
        ...state,
        success: false,
      };
    case `${UNLIKE_COMMENT}_REJECTED`:
      return {
        ...state,
        success: false,
      };
    case `${FETCH_COMMENT}_FULFILLED`:
      return {
        ...state,
        likeCount: action.payload.data.comment_like_count,
        likeStatus: action.payload.data.like_status,
        onFetched: true,
      };

    default: return state;
  }
};


export default (state = initialState.commentLikes, action) => {
  if (action.payload && action.payload.data && action.payload.data.id) {
    const { payload: { data: { id: commentId } } } = action;
    return { ...state, [commentId]: likeComment(state[commentId], action) };
  }
  return state;
};
