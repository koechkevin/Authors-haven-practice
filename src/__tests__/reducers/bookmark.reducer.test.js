import bookmarkReducer from '../../reducers/bookmark.reducer';
import constants from '../../constants';
import initialState from '../../reducers/initialState';

const action = { payload: {} };
const { FAVOURITE, UNFAVOURITE } = constants;

describe('test bookmarking reducer', () => {
  it('should return the initial state', () => {
    expect(bookmarkReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FAVOURITE_REJECTED', () => {
    action.type = `${FAVOURITE}_REJECTED`;
    action.payload = initialState.favourite;
    expect(bookmarkReducer(initialState, action).failure).toEqual(true);
  });

  it('should handle FAVOURITE_FULFILLED', () => {
    action.type = `${FAVOURITE}_FULFILLED`;
    action.payload = initialState.favourite;
    expect(bookmarkReducer(initialState, action).success).toEqual(true);
  });

  it('should handle UNFAVOURITE_REJECTED', () => {
    action.type = `${UNFAVOURITE}_REJECTED`;
    action.payload = initialState.favourite;
    expect(bookmarkReducer(initialState, action).failure).toEqual(true);
  });

  it('should handle UNFAVOURITE_FULFILLED', () => {
    action.type = `${UNFAVOURITE}_FULFILLED`;
    action.payload = initialState.favourite;
    expect(bookmarkReducer(initialState, action).success).toEqual(true);
  });

  it('should handle GET_FAVOURITE', () => {
    action.type = 'GET_FAVOURITE';
    action.payload = initialState.favourite;
    expect(bookmarkReducer(initialState, action).success).toEqual(action.payload);
  });
});
