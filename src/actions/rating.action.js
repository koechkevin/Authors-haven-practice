import CONSTANTS from '../constants/index';
import api from '../api';

const { RATE_ARTICLE, AVERAGE_RATING, RATING_ERROR } = CONSTANTS;

/** action creator, gets individual user ratings on given article */
export const rateArticle = data => ({
  type: RATE_ARTICLE,
  payload: {
    rating: data === null || data.rating === null || data.rating === undefined ? 0 : data.rating,
    averageRating: data === null || data.avg_rating === null ? 0 : data.avg_rating,
  },
});

/**
 * action creator that updates only the average
 * Rating of an article. Notice that our API returns only the average
 * Rating if the user is not authenticated.
 */
export const averageRating = response => ({
  type: AVERAGE_RATING,
  payload: {
    averageRating: response === null ? 0 : response,
  },
});

/** action creator that updates the state of the app if an error occurs when performing api calls */
export const failedRating = error => ({
  type: RATING_ERROR,
  payload: {
    ratingError: error,
  },
});

export const rateArticleAction = (slug, rate) => (dispatch) => {
  const data = {
    rating: {
      rating: rate,
    },
  };
  const url = `/articles/${slug}/rate/`;
  api({
    url,
    method: 'POST',
    data,
  })
    .then((response) => {
      dispatch(rateArticle(response.data.rating));
      dispatch(averageRating(response.data.rating.avg_rating));
    })
    .catch((error) => {
      failedRating(error);
    });
};

export const getRatings = slug => (dispatch) => {
  const url = `/articles/${slug}/rate/`;
  api({
    url,
    method: 'GET',
  })
    .then((response) => {
      dispatch(rateArticle(response.data.rating));
      dispatch(averageRating(response.data.rating.avg_rating));
    })
    .catch((error) => {
      dispatch(failedRating(error));
      dispatch(rateArticle(null));
      dispatch(averageRating(null));
    });
};
