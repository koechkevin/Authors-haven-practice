import expect from 'expect';
import CONSTANTS from '../../constants/index';
import HighlightReducer from '../../reducers/highlight.reducer';
import RESPONSES from '../../mock/responses';

const initialState = {
  data: {},
  errors: {},
};

const action = { payload: {} };
const { HIGHLIGHT } = CONSTANTS;

describe('Highlight text Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(HighlightReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle HIGHLIGHTING_ACTION', () => {
    action.type = HIGHLIGHT.HIGHLIGHTING_ACTION;
    action.payload = RESPONSES.SUCCESS_HIGLIGHT_MESSAGE;
    expect(HighlightReducer(initialState.highlight, action).data).toEqual(action.payload);
  });

  it('should handle HIGHLIGHTING_ERROR_ACTION', () => {
    action.type = HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION;
    action.payload = RESPONSES.HIGHLIGHTING_ERROR_MESSAGE;
    expect(HighlightReducer(initialState.highlight, action).errors).toEqual(action.payload);
  });
});
