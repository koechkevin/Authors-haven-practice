import constants from '../constants';
import initialstate from './initialState';

const { SOCIALLOGIN } = constants;
const { socialauth } = initialstate;

const SocialAuthReducer = (state = { ...socialauth }, action) => {
  switch (action.type) {
    case `${SOCIALLOGIN}_FULFILLED`:
      return {
        ...state,
        resolved: true,
        pending: false,
        userdata: action.payload.data.user,
      };
    case `${SOCIALLOGIN}_REJECTED`:
      return {
        ...state,
        rejected: true,
      };
    case `${SOCIALLOGIN}_PENDING`:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
};


export default SocialAuthReducer;
