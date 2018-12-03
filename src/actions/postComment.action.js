import CONSTANTS from '../constants';
import api from '../api';
import { getComments } from './getComments.action';

const {
  POST_COMMENT_SUCCESS,
  POST_COMMENT_LOADING,
  POST_COMMENT_FAILURE,
} = CONSTANTS.COMMENTS;

export const successfulPost = data => ({
  type: POST_COMMENT_SUCCESS,
  data,
});

export const posting = () => ({
  type: POST_COMMENT_LOADING,
});

export const failedPosting = errors => ({
  type: POST_COMMENT_FAILURE,
  errors,
});

export const postComment = (slug, comment) => ((dispatch) => {
  dispatch(posting);
  const url = `/articles/${slug}/comments/`;
  const data = {
    comment: {
      body: comment,
    },
  };
  api({
    url,
    method: 'POST',
    data,
  })
    .then((response) => {
      dispatch(successfulPost(response.data));
      dispatch(getComments(slug));
    })
    .catch(error => dispatch(failedPosting(error)));
});
