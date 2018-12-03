import CONSTANTS from '../constants';
import api from '../api';
import { getComments } from './getComments.action';

const {
  UPDATE_COMMENT_LOADING,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
} = CONSTANTS.COMMENTS;

export const updating = () => ({
  type: UPDATE_COMMENT_LOADING,
});

export const successfulUpdate = data => ({
  type: UPDATE_COMMENT_SUCCESS,
  data,
});

export const failedUpdate = errors => ({
  type: UPDATE_COMMENT_FAILURE,
  errors,
});

export const updateComment = (slug, commentId, comment) => (dispatch) => {
  dispatch(updating());
  const url = `/articles/${slug}/comments/${commentId}/`;
  const data = {
    comment: {
      body: comment,
    },
  };
  api({
    url,
    method: 'PUT',
    data,
  }).then((response) => { dispatch(successfulUpdate(response.data)); dispatch(getComments(slug)); })
    .catch(error => dispatch(failedUpdate(error)));
};
