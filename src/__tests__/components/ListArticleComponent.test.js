import React from 'react';
import { shallow } from 'enzyme';
import ListArticleComponent from '../../components/Articles/ListArticleComponent';

const props = {
  title: 'title',
  slug: 'slug',
  tags: ['test'],
  author: {
    username: 'test',
  },
  image_url: 'http://plachold.it/20x20',
  description: 'description',
};
const wrapper = shallow(<ListArticleComponent {...props} />);

it('renders component correctly', () => {
  expect(wrapper.find('.article').length).toEqual(1);
  expect(wrapper.find('.description').text()).toEqual('description');
});
