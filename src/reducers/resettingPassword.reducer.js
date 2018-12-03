import CONSTANTS from '../constants';
import initialState from './initialState';

const { RESETTING_PASSWORD_ACTION, RESETTING_ERROR_ACTION } = CONSTANTS;

const ResettingPasswordReducer = (state = initialState.resetPassword, action) => {
  switch (action.type) {
    case RESETTING_PASSWORD_ACTION: {
      return { ...state, data: action.payload };
    }
    case RESETTING_ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default ResettingPasswordReducer;
