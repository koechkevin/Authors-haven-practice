import expect from 'expect';
import CONSTANTS from '../../constants/index';
import getHighlightReducer from '../../reducers/getHighlight.reducer';
import RESPONSES from '../../mock/responses';

const initialState = {
  data: {},
  errors: {},
};

const action = { payload: {} };
const { HIGHLIGHT } = CONSTANTS;

describe('Get highlight text Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(getHighlightReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle GET_HIGHLIGHT_ACTION', () => {
    action.type = HIGHLIGHT.GET_HIGHLIGHT_ACTION;
    action.payload = RESPONSES.GET_HIGHLIGHT_SUCCESS_MESSAGE;
    expect(getHighlightReducer(initialState.highlight, action).data).toEqual(action.payload);
  });

  it('should handle GET_HIGHLIGHT_ERROR_ACTION', () => {
    action.type = HIGHLIGHT.GET_HIGHLIGHT_ERROR_ACTION;
    action.payload = RESPONSES.HIGHLIGHTING_ERROR_MESSAGE;
    expect(getHighlightReducer(initialState.highlight, action).errors).toEqual(action.payload);
  });
});
