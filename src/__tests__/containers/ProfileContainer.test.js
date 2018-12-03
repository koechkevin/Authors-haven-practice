import { mapStateToProps } from '../../containers/Users/UserProfileContainer';

const state = {
  profileReducer: jest.fn(),
};

it('Maps state to props', () => {
  expect(mapStateToProps(state)).toEqual(state.profileReducer);
});
