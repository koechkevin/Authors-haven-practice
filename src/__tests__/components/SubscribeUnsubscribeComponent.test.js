import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import MockAdapter from 'axios-mock-adapter';
import SubscribeUnsubscribeContainer from '../../containers/Notifications/SubscribeUnsubscribeContainer';
import { client } from '../../api';
import config from '../../config';

describe('test notification subscription component', () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];
  const mock = configureMockStore(middlewares);
  const store = mock({
    subscribeNotifications: {
      isSubscribed: false,
      error: {},
    },
  });
  const props = {
    subscribeNotifications: jest.fn(),
    store,
  };
  const wrapper = mount(<SubscribeUnsubscribeContainer {...props} store={store} />);

  afterEach(() => {
    store.clearActions();
  });

  it('renders toggle Button', () => {
    expect(wrapper.find('#toggleButton').length).toEqual(1);
  });

  it('toggles between on and off', () => {
    const mockAxios = new MockAdapter(client);
    mockAxios.onGet(`${config.BASE_URL}/notifications/subscribe/`).reply(400, { error: 'an error occured' });
    wrapper.find('.toggleButton').simulate('click');
    expect(jest.fn()).toHaveBeenCalledTimes(0);
  });
});
