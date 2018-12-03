import constants from '../constants';
import initialState from './initialState';

const { FOLLOW_USER, UNFOLLOW_USER } = constants;

export default function (state = initialState.followUser, action) {
  const { payload, type } = action;
  switch (type) {
    case `${UNFOLLOW_USER}_PENDING`:
    case `${FOLLOW_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case `${FOLLOW_USER}_FULFILLED`:
    case `${UNFOLLOW_USER}_FULFILLED`:
      return {
        ...state,
        followed: payload.data,
        loading: false,
        success: true,
      };
    case `${UNFOLLOW_USER}_REJECTED`:
    case `${FOLLOW_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload.response,
      };

    default:
      return state;
  }
}
