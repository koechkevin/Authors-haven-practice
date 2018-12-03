import constants from '../constants';
import initialState from './initialState';

const { FAVOURITE, UNFAVOURITE } = constants;

export default (state = initialState.bookmark, action) => {
  switch (action.type) {
    case `${FAVOURITE}_FULFILLED`:
      return { ...state, success: true, bookmarked: true };
    case `${UNFAVOURITE}_FULFILLED`:
      return { ...state, success: true, bookmarked: false };
    case 'GET_FAVOURITE':
      return { ...state, bookmarked: action.payload };
    case `${FAVOURITE}_REJECTED`:
    case `${UNFAVOURITE}_REJECTED`:
      return { ...state, failure: true, errors: action.payload };
    default:
      return state;
  }
};
