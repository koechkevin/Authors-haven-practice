import api from '../api';
import CONSTANTS from '../constants';

const { VERIFY } = CONSTANTS;

const verify = verifyToken => ({
  type: VERIFY,
  payload: api({
    url: `/verify/${verifyToken}`,
    method: 'GET',
  }),
});

export default verify;
