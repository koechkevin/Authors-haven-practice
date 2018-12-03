import React from 'react';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { favourite, getFavourite } from '../../actions/bookmark.action';
import Bookmark from '../../components/Articles/BookmarkComponent';
import { client } from '../../api';
import config from '../../config';

const mockStore = configureStore([thunk]);
const axiosMock = new MockAdapter(client);

const store = mockStore({
  favorite: {
    favorite: true,
  },
});

const props = {
  getFavourite: jest.fn(),
  favourite: jest.fn(),
  slug: '',
  bookmarked: false,
  user: {},
};

const wrapper = mount(<Bookmark {...props} store={store} />);


describe('test bookmarking', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('bookmarks', () => {
    store.dispatch(favourite());
    expect(store.getActions()[0].type).toBe('FAVORITE', 'UNFAVOURITE');
  });

  it('tests get favourites', () => {
    const slug = { slug: 'slug' };
    axiosMock.onGet(`${config.BASE_URL}articles/${slug}`)
      .reply(200, {});
    store.dispatch(getFavourite(slug)).then(() => {
      expect(store.getActions()[0].type).toBe('GET_FAVOURITE');
    });
  });
});
