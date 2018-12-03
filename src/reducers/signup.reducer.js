import constants from '../constants';
import initialState from './initialState';

const { SIGNUP } = constants;

const signUpReducer = (state = initialState.signUp, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${SIGNUP}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
        message: payload.data,
      };
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
