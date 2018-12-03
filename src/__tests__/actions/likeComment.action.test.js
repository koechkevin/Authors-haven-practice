import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { fetchComment } from '../../actions/likeComment.action';
import CommentsLikeComponent from '../../components/Comments/CommentLikeComponent';

const mockStore = configureMockStore();
const store = mockStore({});

const props = {
  fetchComment: jest.fn(),
  commentLike: jest.fn(),
  slug: '',
  liked: false,
  id: '',
};

const wrapper = mount(<CommentsLikeComponent {...props} store={store} />);

describe('test liking', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('getLikes', () => {
    const credentials = {
      slug: 'michael-basweti-com',
      id: 2,
    };
    store.dispatch(fetchComment(credentials));
    expect(store.getActions()[0].type).toBe('FETCH_COMMENT');
  });
});
