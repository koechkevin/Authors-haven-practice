import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-materialize';
import FollowersComponent from '../../components/Users/FollowersComponent';
import { followersAction, followUser } from '../../actions/follow.actions';

const props = {
  match: {
    params: {
      username: 'test-username',
    },
  },
  loading: false,
  followersAction,
  followUser,
};


describe('test commentBlock', () => {
  const wrapper = shallow(<FollowersComponent {...props} />);
  it('Renders <Row /> component', () => {
    expect(wrapper.find(Row).length).toBe(0);
  });
});
