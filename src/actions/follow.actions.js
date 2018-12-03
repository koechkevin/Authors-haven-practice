import CONSTANTS from '../constants';
import api from '../api';

const { FOLLOW_USER, UNFOLLOW_USER, FOLLOWERS, FOLLOWING } = CONSTANTS;

// action creators
export const followersAction = username => ({
  type: FOLLOWERS,
  payload: api({
    url: `/profile/${username}/followers/`,
    method: 'GET',
  }),
});

export const followingAction = username => ({
  type: FOLLOWING,
  payload: api({
    url: `/profile/${username}/following/`,
    method: 'GET',
  }),
});

export const followUser = (parentUser, username, followed) => (dispatch) => {
  dispatch({
    type: followed ? UNFOLLOW_USER : FOLLOW_USER,
    payload: api({
      url: `/profile/${username}/follow/`,
      method: followed ? 'DELETE' : 'POST',
    }),
  }).then(() => {
    dispatch(followersAction(parentUser));
    dispatch(followingAction(parentUser));
  });
};
