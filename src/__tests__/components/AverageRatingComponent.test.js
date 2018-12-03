import React from 'react';
import { shallow } from 'enzyme';
import AverageRating from '../../components/Rating/AverageRatingComponent';

describe('test average rating component', () => {
  it('renders average rating component if value is greater than zero', () => {
    const props = {
      averageRating: 2,
    };
    const wrapper = shallow(<AverageRating {...props} />);
    expect(wrapper.find('.averageRating').length).toEqual(1);
  });

  it('does not render if value is zero', () => {
    const props = {
      averageRating: 0,
    };
    const wrapper = shallow(<AverageRating {...props} />);
    expect(wrapper.find('.averageRating').length).toEqual(0);
  });
});
