import { mapStateToProps } from '../../containers/Users/UpdateProfileContainer';

const state = {
  updateProfileReducer: jest.fn(),
  profileReducer: {},
};

it('Maps state to props', () => {
  expect(mapStateToProps(state)).toEqual(state);
});
