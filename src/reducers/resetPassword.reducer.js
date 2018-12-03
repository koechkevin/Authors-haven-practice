import CONSTANTS from '../constants';
import initialState from './initialState';

const { RESET_PASSWORD_ACTION, ERROR_ACTION } = CONSTANTS;

const ResetPasswordReducer = (state = initialState.resetPassword, action) => {
  switch (action.type) {
    case RESET_PASSWORD_ACTION: {
      return { ...state, data: action.payload };
    }
    case ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default ResetPasswordReducer;
