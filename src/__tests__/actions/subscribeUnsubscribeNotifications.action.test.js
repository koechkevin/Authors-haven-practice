import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import subscribeUnsubscribeAction from '../../actions/subscribeUnsubscribeNotifications.action';
import config from '../../config';
import { client } from '../../api';

const middlewares = [
  thunkMiddleware,
  promiseMiddleware(),
];

const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('test subscribtion action', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches SUCCESSFUL action type', () => {
    const mock = new MockAdapter(client);
    mock.onGet('/notifications/subscribe/').reply(200, { is_subscribed: true });
    return store.dispatch(subscribeUnsubscribeAction('subscribe'))
      .then(() => {
        expect(store.getActions()[0].isSubscribed).toBe(true);
      });
  });

  it(' dispatches FAILED action type', () => {
    const mock = new MockAdapter(client);
    mock.onGet(`${config.BASE_URL}/notifications/subscribe/`).reply(400, { error: 'an error occured' });
    return store.dispatch(subscribeUnsubscribeAction('subscribe'))
      .catch(() => {
        expect(store.getActions()).toContainEqual('FAILED');
      });
  });
});
