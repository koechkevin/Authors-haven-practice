import api from '../api';
import CONSTANTS from '../constants';

const { ERROR_ACTION, RESET_PASSWORD_ACTION } = CONSTANTS;

const resetPasswordRequest = ({ email }) => dispatch => api({
  url: '/users/email_sent',
  method: 'POST',
  data: { email },
})
  .then((data) => {
    dispatch({
      type: RESET_PASSWORD_ACTION,
      payload: data.data,
    });
  }).catch((err) => {
    dispatch({
      type: ERROR_ACTION,
      payload: err.response.data.user,
    });
  });

export default resetPasswordRequest;
