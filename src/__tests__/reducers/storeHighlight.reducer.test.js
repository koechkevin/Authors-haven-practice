import expect from 'expect';
import CONSTANTS from '../../constants/index';
import storeHighlights from '../../reducers/storeHiglights.reducer';
import RESPONSES from '../../mock/responses';

const initialState = {
  data: {},
  errors: {},
};

const action = { payload: {} };
const { HIGHLIGHT } = CONSTANTS;

describe('Store highlight text Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(storeHighlights(initialState, action)).toEqual(initialState);
  });

  it('should handle STORE_HIGHLIGHT_ACTION', () => {
    action.type = HIGHLIGHT.STORE_HIGLIGHT_ACTION;
    action.payload = RESPONSES.GET_HIGHLIGHT_SUCCESS_MESSAGE;
    expect(storeHighlights(initialState.highlight, action).data).toEqual(action.payload);
  });
});
