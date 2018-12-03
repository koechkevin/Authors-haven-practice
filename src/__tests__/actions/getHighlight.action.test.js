import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import GetHighlightRequest from '../../actions/getHighlight.action';
import CONSTANTS from '../../constants/index';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

const { HIGHLIGHT } = CONSTANTS;
const mock = new MockAdapter(axios);

describe('Highlight text Action tests', () => {
  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch GET_HIGHLIGHT_ACTION when getting the highlights', () => {
    const data = 'Something went wrong!';
    mock.onGet('http://127.0.0.1:8000/api').reply(200, data);
    return store.dispatch(GetHighlightRequest()).then(() => {
      expect(store.getActions()).toContainEqual({
        type: HIGHLIGHT.GET_HIGHLIGHT_ERROR_ACTION,
        payload: data,
      });
    });
  });

  it('should dispatch GET_HIGHLIGHT_ERROR_ACTION if fail to fetch highlights', () => {
    const data = 'Something went wrong!';
    mock.onGet('http://127.0.0.1:8000/api').reply(400, data);
    return store.dispatch(GetHighlightRequest()).catch(() => {
      expect(store.getActions()).toContainEqual({
        type: HIGHLIGHT.GET_HIGHLIGHT_ERROR_ACTION,
        payload: data,
      });
    });
  });
});
