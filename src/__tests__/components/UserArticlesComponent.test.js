import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-materialize';
import UserArticleComponent from '../../components/Users/UserArticlesComponent';
import { userArticlesAction } from '../../actions/profile.actions';

const props = {
  match: {
    params: {
      username: 'test-username',
    },
  },
  userArticlesAction,
};

const wrapper = shallow(<UserArticleComponent {...props} />);
it('Renders <Row /> component', () => {
  expect(wrapper.find(Row).length).toBe(0);
});
