import { mapStateToProps } from '../../containers/Rating/MyRatingContainer';

describe('mapStateToProps function', () => {
  const state = {
    ratingReducer:
            {
              averageRating: 2,
              slug: 'hi-there',
              rating: 1,
              ratingError: 'error',
            },
  };

  it('maps a state to prop', () => {
    const expectedProps = {
      rating: 1,
      averageRating: 2,
      ratingError: 'error',
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
