import { mapStateToProps } from '../../containers/Users/UserArticlesContainer';

const state = {
  userArticlesReducer: jest.fn(),
};

it('Maps state to props', () => {
  expect(mapStateToProps(state)).toEqual(state.userArticlesReducer);
});
