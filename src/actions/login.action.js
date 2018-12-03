import api from '../api';
import CONSTANTS from '../constants';

const { LOGIN, LOGOUT } = CONSTANTS;
const loginAct = credentials => ({
  type: LOGIN,
  payload: api({
    url: '/users/login/',
    method: 'POST',
    data: { user: credentials },
    header: {
      'Content-Type': 'application/json',
    },
  }),
});

export const logOutAct = () => ({
  type: LOGOUT,
});

export default loginAct;
