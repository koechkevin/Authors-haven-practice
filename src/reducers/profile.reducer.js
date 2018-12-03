import constants from '../constants';
import initialState from './initialState';

const { LOAD_PROFILE, FOLLOW_USER, UNFOLLOW_USER } = constants;

export default function (state = initialState.userProfile, action) {
  const { payload, type } = action;
  switch (type) {
    case `${LOAD_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
        followSuccess: false,
      };

    case `${FOLLOW_USER}_FULFILLED`:
      return action.payload.data.username === state.profile.username ? {
        ...state,
        profile: {
          ...state.profile,
          follow_status: true,
        },
        loading: false,
        success: true,
        followSuccess: true,
      } : state;

    case `${LOAD_PROFILE}_FULFILLED`:
      return {
        ...state,
        profile: payload.data.profile,
        loading: false,
        success: true,
        followSuccess: false,
      };

    case `${UNFOLLOW_USER}_FULFILLED`:
      return action.payload.data.username === state.profile.username ? {
        ...state,
        profile: {
          ...state.profile,
          follow_status: false,
        },
        loading: false,
        success: true,
        followSuccess: true,
      } : state;

    case `${LOAD_PROFILE}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload.response.data.profile,
        followSuccess: false,
      };

    default:
      return state;
  }
}
