import React from 'react';
import { shallow } from 'enzyme';
import LikeDislike from '../../components/Articles/LikeDislikeComponent';

describe('test likedislike component', () => {
  const props = {
    likeDislikeCount: jest.fn(),
    like: jest.fn(),
    slug: '',
    likeStatus: 'disliked',
    likesCount: 0,
    dislikeCount: 0,
    user: {},
  };
  const wrapper = shallow(<LikeDislike {...props} />);

  it('calls componentWillMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentWillMount');
    wrapper.instance().componentWillMount();
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('Renders bookmark component', () => {
    expect(wrapper.find('.like-dislike').length).toBe(1);
  });

  it('tests handlelikeDislike', () => {
    const handleClick = jest.spyOn(wrapper.instance(), 'handlelikeDislike');
    wrapper.instance().handlelikeDislike(true);
    expect(handleClick.mock.calls.length).toEqual(1);
  });

  it('tests handlelikeDislike after a dislike', () => {
    const handleClick = jest.spyOn(wrapper.instance(), 'handlelikeDislike');
    wrapper.instance().handlelikeDislike(false);
    expect(handleClick.mock.calls.length).toEqual(2);
  });
});
