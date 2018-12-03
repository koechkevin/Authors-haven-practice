import { mapStateToProps } from '../../containers/Users/FollowersContainer';

const state = {
  followersReducer: jest.fn(),
};

it('Maps state to props', () => {
  expect(mapStateToProps(state)).toEqual(state.followersReducer);
});
