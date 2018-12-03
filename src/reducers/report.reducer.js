import constants from '../constants';
import initialState from './initialState';

const { REPORT_ARTICLE, RESET_STATUS } = constants;

const reportArticleReducer = (state = initialState.report, action) => {
  switch (action.type) {
    case `${REPORT_ARTICLE}_PENDING`:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case `${REPORT_ARTICLE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };
    case `${REPORT_ARTICLE}_REJECTED`:
      return {
        ...state,
        success: false,
        loading: false,
        failed: true,
        error: action.payload,
      };
    case RESET_STATUS:
      return {
        ...state,
        success: false,
        failed: false,
      };
    default:
      return state;
  }
};

export default reportArticleReducer;
