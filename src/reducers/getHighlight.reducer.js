import CONSTANTS from '../constants';
import initialState from './initialState';

const { HIGHLIGHT } = CONSTANTS;

const GetHighlightReducer = (state = initialState.highlight, action) => {
  switch (action.type) {
    case HIGHLIGHT.GET_HIGHLIGHT_ACTION: {
      return { ...state, data: action.payload };
    }
    case HIGHLIGHT.GET_HIGHLIGHT_ERROR_ACTION: {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
};

export default GetHighlightReducer;
