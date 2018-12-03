import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import highlightRequest from '../../actions/highlight.action';
import CONSTANTS from '../../constants/index';
import RESPONSES from '../../mock/responses';

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
    const highlight = {
      snippet: 'text',
      index: 0,
    };
    mock.onPost('http://127.0.0.1:8000/api').reply(401, data);
    store.dispatch(highlightRequest('time-management', highlight)).then(() => {
      expect(store.getActions()).toContainEqual({
        type: HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION,
        payload: data,
      });
    });
  });

  it('should dispatch HIGHLIGHTING_ERROR_ACTION if fail to highlight', () => {
    const data = RESPONSES.HIGHLIGHTING_ERROR_MESSAGE;
    mock.onPost('url').reply(401, data);
    return store.dispatch(highlightRequest('time-management')).catch(() => {
      expect(store.getActions()).toContainEqual({
        type: HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION,
        payload: data.response.data,
      });
    });
  });
});
