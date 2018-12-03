import api from '../api';
import CONSTANTS from '../constants';

const { LIKE_COMMENT, UNLIKE_COMMENT, FETCH_COMMENT } = CONSTANTS;

export const fetchComment = (slug, id) => ({
  type: FETCH_COMMENT,
  payload: api({
    url: `/articles/${slug}/comments/${id}/`,
    method: 'get',
  }),
});

export const commentLike = ({ slug, id, liked }) => (dispatch) => {
  const response = dispatch({
    type: liked ? UNLIKE_COMMENT : LIKE_COMMENT,
    payload: api({
      url: `articles/${slug}/comments/${id}/like`,
      method: liked ? 'DELETE' : 'POST',
      data: liked ? '' : { comment_likes: true },
    }),
  });
  response.then(() => {
    dispatch(fetchComment(slug, id));
  });
};
