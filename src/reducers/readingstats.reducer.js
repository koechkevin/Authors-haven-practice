import constants from '../constants';
import initialstate from './initialState';

const { readingStats } = initialstate;
const { READSTATS } = constants;

const articleStatsReducer = (state = readingStats, action) => {
  const { payload, type } = action;
  switch (type) {
    case `${READSTATS}_FULFILLED`:
      return {
        ...state,
        resolved: true,
        pending: false,
        stats: payload.data,
      };
    case `${READSTATS}_REJECTED`:
      return {
        ...state,
        failed: true,
      };
    case `${READSTATS}_PENDING`:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
};

export default articleStatsReducer;
