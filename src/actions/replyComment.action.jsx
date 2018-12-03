import api from '../api';
import CONSTANTS from '../constants';
import { getComments } from './getComments.action';

const {
  REPLY_COMMENT_LOADING,
  REPLY_COMMENT_SUCCESS,
  REPLY_COMMENT_FAILURE,
} = CONSTANTS.COMMENTS;

export const replying = () => ({
  type: REPLY_COMMENT_LOADING,
});

export const successfulReply = data => ({
  type: REPLY_COMMENT_SUCCESS,
  data,
});

export const failedReply = errors => ({
  type: REPLY_COMMENT_FAILURE,
  errors,
});

export const replyComment = (slug, id, body) => ((dispatch) => {
  dispatch(replying());
  const url = `articles/${slug}/comments/${id}/`;
  const data = { comment: {
    body,
  } };
  return api({
    url, method: 'POST', data,
  })
    .then((response) => {
      dispatch(successfulReply(response.data));
      dispatch(getComments(slug));
    })
    .catch((errors) => {
      dispatch(failedReply(errors));
    });
});
