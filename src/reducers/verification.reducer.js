import constants from '../constants/index';
import initialState from './initialState';

const { VERIFY } = constants;

const verifyReducer = (state = initialState.verify, action) => {
  const { type } = action;
  switch (type) {
    case `${VERIFY}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${VERIFY}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case `${VERIFY}_REJECTED`:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default verifyReducer;
