import api from '../api';
import constants from '../constants';

const { LIKE_DISLIKE, LIKES_COUNT } = constants;

const like = (body, slug) => ({
  type: LIKE_DISLIKE,
  payload: api({
    url: `/articles/${slug}/like/`,
    method: !body ? 'delete' : 'post',
    data: !body ? '' : body,
  }),
}
);

export const likeDislikeCount = slug => ({
  type: LIKES_COUNT,
  payload: api({
    url: `/articles/${slug}`,
    method: 'get',
  }),
});

export default like;
