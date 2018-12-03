import React from 'react';
import { shallow } from 'enzyme';
import Bookmark from '../../components/Articles/BookmarkComponent';

describe('test bookmarking component', () => {
  const props = {
    favourite: jest.fn(),
    getFavourite: jest.fn(),
    slug: '',
    bookmarked: false,
    user: {},
  };
  const wrapper = shallow(<Bookmark {...props} />);

  it('calls componentWillMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentWillMount');
    wrapper.instance().componentWillMount();
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('Renders bookmark component', () => {
    expect(wrapper.find('.bookmarks').length).toBe(1);
  });

  it('tests handleBookmark', () => {
    const handleClick = jest.spyOn(wrapper.instance(), 'handleBookmark');
    const event = {
      target: {
        slug: '',
        bookmarked: false,
      },
    };
    wrapper.instance().handleBookmark(event);
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
