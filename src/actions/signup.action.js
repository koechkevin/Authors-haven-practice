import api from '../api';
import constants from '../constants';

const { SIGNUP } = constants;

const signup = credentials => ({
  type: SIGNUP,
  payload: api({
    url: '/users/',
    method: 'POST',
    data: { user: credentials },
  }),
});

export default signup;
