import constants from '../constants';
import initialState from './initialState';

const { FOLLOWERS } = constants;

const followersReducer = (state = initialState.followers, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${FOLLOWERS}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case `${FOLLOWERS}_FULFILLED`:
      return {
        ...state,
        followers: payload.data,
        loading: false,
        success: true,
      };
    case `${FOLLOWERS}_REJECTED`:
      return {
        ...state,
        loading: false,
        errors: payload.data,
        success: false,
      };

    default:
      return state;
  }
};

export default followersReducer;
