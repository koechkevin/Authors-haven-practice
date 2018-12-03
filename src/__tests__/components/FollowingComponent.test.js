import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-materialize';
import FollowingComponent from '../../components/Users/FollowingComponent';
import { followingAction, followUser } from '../../actions/follow.actions';

const props = {
  match: {
    params: {
      username: 'test-username',
    },
  },
  loading: false,
  followingAction,
  followUser,
};

const wrapper = shallow(<FollowingComponent {...props} />);
it('Renders <Row /> component', () => {
  expect(wrapper.find(Row).length).toBe(0);
});
