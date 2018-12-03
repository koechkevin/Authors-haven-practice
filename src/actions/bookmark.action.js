import api from '../api';
import constants from '../constants';

const { FAVOURITE, UNFAVOURITE } = constants;

export const favourite = (slug, favorited) => ({
  type: favorited ? UNFAVOURITE : FAVOURITE,
  payload: api({
    url: `articles/${slug}/favourite`,
    method: favorited ? 'DELETE' : 'POST',
  }),
});

export const getFavourite = slug => (dispatch) => {
  const url = `articles/${slug}`;
  return api({
    url, method: 'GET',
  })
    .then(response => dispatch({
      type: 'GET_FAVOURITE',
      payload: response.data.article.favourited,
    }))
    .catch(error => (error));
};
