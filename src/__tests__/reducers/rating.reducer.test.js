import ratingReducer from '../../reducers/rating.reducer';
import {
  averageRating,
  rateArticle,
  failedRating,
} from '../../actions/rating.action';

describe('reducer function', () => {
  const initialState = {
    averageRating: 0,
    rating: 0,
  };
  it('anonymous action on our reducer should not alter state', () => {
    const anonymousAction = response => ({
      type: 'ANONYMOUS',
      payload: {
        averageRating: response === null ? 0 : response,
      },
    });
    expect(ratingReducer(initialState, anonymousAction(''))).toBe(initialState);
  });

  it('average rating action with parameter 4 on reducer should update state to 4', () => {
    const expectedAverageState = 4;
    expect(ratingReducer(initialState, averageRating(4)).averageRating).toBe(expectedAverageState);
  });

  it('test rateArticle action on reducer ', () => {
    const actionData = {
      rating: 3,
      avg_rating: 2,
    };
    const expectedRating = 3;
    const expectedAverageState = 2;
    const action = rateArticle(actionData);
    const reducedState = ratingReducer(initialState, action);
    expect(reducedState.averageRating).toBe(expectedAverageState);
    expect(reducedState.rating).toBe(expectedRating);
  });

  it('failed Rating action on reducer', () => {
    const expectedRating = 0;
    const expectedAverageState = 0;
    const expectedError = 'error';
    expect(ratingReducer(initialState, failedRating('error')).ratingError).toBe(expectedError);
    expect(ratingReducer(initialState, failedRating('error')).averageRating).toBe(expectedAverageState);
    expect(ratingReducer(initialState, failedRating('error')).rating).toBe(expectedRating);
  });
});
