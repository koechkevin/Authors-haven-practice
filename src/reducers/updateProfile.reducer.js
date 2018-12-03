import constants from '../constants';
import initialState from './initialState';

const { UPDATE_PROFILE } = constants;

const updateProfileReducer = (state = initialState.updateProfile, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${UPDATE_PROFILE}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case `${UPDATE_PROFILE}_FULFILLED`:
      return {
        ...state,
        userProfile: payload.data,
        loading: false,
        success: true,
      };

    case `${UPDATE_PROFILE}_REJECTED`:
      return {
        ...state,
        loading: false,
        success: false,
        errors: payload.response.data.errors,
      };

    default:
      return state;
  }
};

export default updateProfileReducer;
