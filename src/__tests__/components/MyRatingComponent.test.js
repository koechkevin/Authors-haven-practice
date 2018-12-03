import React from 'react';
import { shallow } from 'enzyme';
import StarRatings from 'react-star-ratings';
import MyRating from '../../components/Rating/MyRatingComponent';
import { rateArticleAction } from '../../actions/rating.action';

describe('test my rating component', () => {
  const props = {
    rating: 1,
    slug: 'hi-there',
    rateArticleAction,
    alert: jest.fn(),
  };

  it('renders MyRating component', () => {
    const wrapper = shallow(<MyRating {...props} />);
    expect(wrapper.find(StarRatings).length).toBe(0);
  });
});
