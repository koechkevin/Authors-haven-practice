import React from 'react';
import Slider from 'react-animated-slider';
import { shallow } from 'enzyme';
import EmptyArticlesComponent from '../../components/EmptyArticlesComponent';

const wrapper = shallow(<EmptyArticlesComponent />);

it('renders slider correctly', () => {
  expect(wrapper.find(Slider).length).toEqual(1);
});
