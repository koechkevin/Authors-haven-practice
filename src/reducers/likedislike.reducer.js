import constants from '../constants';
import initialstate from './initialState';

const { likeDislike } = initialstate;
const { LIKE_DISLIKE, LIKES_COUNT } = constants;

const LikeDislikeReducer = (state = likeDislike, action) => {
  const { payload, type } = action;
  let status = 'none';
  switch (type) {
    case `${LIKE_DISLIKE}_FULFILLED`:
      if (payload.data.detail.includes(' liked')) {
        status = 'liked';
      } else if (payload.data.detail.includes(' disliked')) {
        status = 'disliked';
      }
      return {
        ...state,
        resolved: true,
        pending: false,
        likeStatus: status,
      };
    case `${LIKE_DISLIKE}_REJECTED`:
      return {
        ...state,
        rejected: true,
      };
    case `${LIKE_DISLIKE}_PENDING`:
      return {
        ...state,
        pending: true,
      };
    case `${LIKES_COUNT}_FULFILLED`:
      return {
        ...state,
        likesCount: payload.data.article.likes_count,
        dislikesCount: payload.data.article.dislikes_count,
      };
    default:
      return state;
  }
};

export default LikeDislikeReducer;
