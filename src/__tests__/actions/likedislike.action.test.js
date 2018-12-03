import React from 'react';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import like, { likeDislikeCount } from '../../actions/likedislike.action';
import LikeDislike from '../../components/Articles/LikeDislikeComponent';
import { client } from '../../api';
import config from '../../config';

const mockStore = configureStore([thunk]);
const axiosMock = new MockAdapter(client);

const store = mockStore({
  likedislike: {
    likeStatus: 'none',
  },
});

const props = {
  likeDislikeCount: jest.fn(),
  like: jest.fn(),
  slug: '',
  likeStatus: 'none',
  likesCount: 0,
  dislikeCount: 0,
  user: {},
};

const wrapper = mount(<LikeDislike {...props} store={store} />);


describe('test liking', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('test likes', () => {
    store.dispatch(like(true));
    expect(store.getActions()[0].type).toBe('LIKE_DISLIKE', 'LIKES_COUNT');
  });

  it('test dislikes', () => {
    store.dispatch(like(false));
    expect(store.getActions()[0].type).toBe('LIKE_DISLIKE', 'LIKES_COUNT');
  });

  it('gets count', () => {
    const slug = { slug: 'slug' };
    axiosMock.onGet(`${config.BASE_URL}articles/${slug}`)
      .reply(200, {});
    store.dispatch(likeDislikeCount(slug));
    expect(store.getActions()[0].type).toBe('LIKES_COUNT');
  });
});
