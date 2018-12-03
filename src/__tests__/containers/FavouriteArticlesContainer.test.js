import { mapStateToProps } from '../../containers/Users/FavouriteArticlesContainer';

const state = {
  favouriteArticlesReducer: jest.fn(),
};

it('Maps state to props', () => {
  expect(mapStateToProps(state)).toEqual(state.favouriteArticlesReducer);
});
