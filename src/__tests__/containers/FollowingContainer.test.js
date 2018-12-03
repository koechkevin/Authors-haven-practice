import { mapStateToProps } from '../../containers/Users/FollowingContainer';

const state = {
  followingReducer: jest.fn(),
};

it('Maps state to props', () => {
  expect(mapStateToProps(state)).toEqual(state.followingReducer);
});
