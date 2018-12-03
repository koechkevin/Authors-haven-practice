import constants from '../constants/index';
import initialState from './initialState';

const { LOGIN, LOGOUT } = constants;

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState.login;
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        onPending: true,
        onRejected: false,
        onFulfilled: false,
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        onRejected: false,
        onFulfilled: true,
        onPending: false,
        data: action.payload,
      };

    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        onRejected: true,
        onPending: false,
        onFulfilled: false,
        errors: action.payload,
      };

    default: return state;
  }
};
export default loginReducer;
