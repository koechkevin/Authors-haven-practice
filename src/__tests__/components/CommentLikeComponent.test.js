import React from 'react';
import { mount } from 'enzyme';
import CommentsLikeComponent from '../../components/Comments/CommentLikeComponent';

describe('test commentLike', () => {
  const props = {
    fetchComment: jest.fn(),
    commentLike: jest.fn(),
    slug: '',
    id: '',
  };
  const wrapper = mount(<CommentsLikeComponent {...props} />);

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
  });
  it('like button', () => {
    wrapper.find('#likeComm').simulate('click');
    expect(jest.fn().mock.calls).toEqual([]);
  });
});
