import CONSTANTS from '../constants';
import api from '../api';

const {
  LOAD_PROFILE,
  UPDATE_PROFILE,
  LOAD_USER_ARTICLES,
  LOAD_FAVE_ARTICLES,
} = CONSTANTS;

// Action creatorS
export const loadProfile = username => ({
  type: LOAD_PROFILE,
  payload: api({
    url: `/profiles/${username}/`,
    method: 'GET',
  }),
});

export const updateProfileAction = (userData, username) => ({
  type: UPDATE_PROFILE,
  payload: api({
    url: `/profiles/${username}/`,
    method: 'PUT',
    data: { user: userData },
  }),
});

export const userArticlesAction = username => ({
  type: LOAD_USER_ARTICLES,
  payload: api({
    url: `/articles?author=${username}`,
    method: 'GET',
    token: '',
  }),
});

export const favouriteArticlesAction = () => ({
  type: LOAD_FAVE_ARTICLES,
  payload: api({
    url: '/favourite',
    method: 'GET',
  }),
});
