import React from 'react';
import { shallow } from 'enzyme';
import ReadingStatsComponent from '../../components/Users/ReadingStatsComponent';

const props = {
  stats: [{
    slug: 'some-story',
    title: 'some story',
    view_count: 9,
    comment_count: 2,
  },
  ],
  getStat: jest.fn(),
};

const otherProps = {
  ...props,
  stats: [],
};


describe('tests reading stat component', () => {
  it('test renders', () => {
    const wrapper = shallow(<ReadingStatsComponent {...props} />);
    expect(wrapper.find('Table').length).toEqual(1);
  });

  it('test renders', () => {
    const wrapper = shallow(<ReadingStatsComponent {...otherProps} />);
    expect(wrapper.find('td').length).toEqual(0);
  });
});
