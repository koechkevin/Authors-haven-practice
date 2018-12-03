import { mapStateToProps } from '../../containers/Rating/AverageRatingContainer';

const state = {
  ratingReducer: {
    averageRating: 4,
  },
};

describe('test mapStateToProps function', () => {
  it('maps a state to props correctly', () => {
    const expected = state.ratingReducer;
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
