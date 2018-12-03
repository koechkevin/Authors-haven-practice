import CONSTANTS from '../constants';
import api from '../api';

const { RESETTING_ERROR_ACTION, RESETTING_PASSWORD_ACTION } = CONSTANTS;

const ResettingPassword = (token, password) => dispatch => api({
  url: `/users/password_reset?token=${token}`,
  method: 'PUT',
  data: { token, password },
})
  .then((response) => {
    dispatch({
      type: RESETTING_PASSWORD_ACTION,
      payload: response.data,
    });
  }).catch((err) => {
    dispatch({
      type: RESETTING_ERROR_ACTION,
      payload: err.response.data.user
        ? err.response.data.user.message : err.response.data.errors.password[0],
    });
  });

export default ResettingPassword;
