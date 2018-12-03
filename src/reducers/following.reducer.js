import constants from '../constants';
import initialState from './initialState';

const { FOLLOWING } = constants;

const followingReducer = (state = initialState.following, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${FOLLOWING}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case `${FOLLOWING}_FULFILLED`:
      return {
        ...state,
        following: payload.data,
        loading: false,
        success: true,
      };
    case `${FOLLOWING}_REJECTED`:
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

export default followingReducer;
