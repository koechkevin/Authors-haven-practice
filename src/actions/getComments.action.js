import api from '../api';
import CONSTANTS from '../constants';

const {
  FETCH_COMMENT_LOADING,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
} = CONSTANTS.COMMENTS;


export const fetchComments = () => ({
  type: FETCH_COMMENT_LOADING,
});

export const successfulFetch = data => ({
  type: FETCH_COMMENT_SUCCESS,
  data,
});

export const failedFetching = errors => ({
  type: FETCH_COMMENT_FAILURE,
  errors,
});

export const getComments = slug => ((dispatch) => {
  dispatch(fetchComments());
  const url = `/articles/${slug}/comments/`;
  api({
    url,
    method: 'GET',
  })
    .then((response) => {
      dispatch(successfulFetch(response.data));
    })
    .catch((error) => {
      dispatch(failedFetching(error));
    });
});
