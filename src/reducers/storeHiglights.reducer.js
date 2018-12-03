import CONSTANTS from '../constants';
import initialState from './initialState';

const { HIGHLIGHT } = CONSTANTS;

const storeHighlights = (state = initialState.storeHighlight, action) => {
  switch (action.type) {
    case HIGHLIGHT.STORE_HIGLIGHT_ACTION: {
      return { ...state, data: action.payload };
    }
    case HIGHLIGHT.STORE_HIGLIGHT_ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default storeHighlights;
