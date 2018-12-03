import api from '../api';
import CONSTANTS from '../constants';
import { getComments } from './getComments.action';

const {
  DELETE_COMMENT_LOADING,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} = CONSTANTS.COMMENTS;

export const deleting = () => ({
  type: DELETE_COMMENT_LOADING,
});

export const successfulDelete = data => ({
  type: DELETE_COMMENT_SUCCESS,
  data,
});

export const failedDelete = errors => ({
  type: DELETE_COMMENT_FAILURE,
  errors,
});

export const deleteComment = (slug, id) => ((dispatch) => {
  dispatch(deleting());
  const url = `articles/${slug}/comments/${id}/`;
  api({
    url, method: 'DELETE',
  })
    .then((response) => {
      dispatch(successfulDelete(response.data));
      dispatch(getComments(slug));
    })
    .catch((errors) => {
      dispatch(failedDelete(errors));
    });
});
