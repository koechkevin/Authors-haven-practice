import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-materialize';
import FavouriteArticleComponent from '../../components/Users/FavouriteArticlesComponent';
import { favouriteArticlesAction } from '../../actions/profile.actions';

const props = {
  username: '',
  favouriteArticlesAction,
};

const wrapper = shallow(<FavouriteArticleComponent {...props} />);
it('Renders <Row /> component', () => {
  expect(wrapper.find(Row).length).toBe(0);
});
