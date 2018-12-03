import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import StoreHighlightRequest from '../../actions/storeHighlightSnippet.action';
import CONSTANTS from '../../constants/index';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

const { HIGHLIGHT } = CONSTANTS;

describe('Store highlight text Action tests', () => {
  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch STORE_HIGLIGHT_ACTION  when getting the highlights', () => {
    const data = 'Always have fun';
    store.dispatch(StoreHighlightRequest(data));
    expect(store.getActions()).toContainEqual({
      type: HIGHLIGHT.STORE_HIGLIGHT_ACTION,
      payload: data,
    });
  });
});
