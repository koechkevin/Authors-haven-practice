import CONSTANTS from '../constants';
import initialState from './initialState';

const { HIGHLIGHT } = CONSTANTS;

const HighlightReducer = (state = initialState.highlight, action) => {
  switch (action.type) {
    case HIGHLIGHT.HIGHLIGHTING_ACTION: {
      return { ...state, data: action.payload };
    }
    case HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default HighlightReducer;
