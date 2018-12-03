import api from '../api';
import constants from '../constants';

const { READSTATS } = constants;

export const getStats = () => ({
  type: READSTATS,
  payload: api({
    url: 'articles/statistics/',
    method: 'get',
  }),
});

export default getStats;
