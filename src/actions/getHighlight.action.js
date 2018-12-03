import api from '../api';
import CONSTANTS from '../constants';

const { HIGHLIGHT } = CONSTANTS;

const GetHighlightRequest = slug => dispatch => api({
  url: `/articles/${slug}/highlight/`,
  method: 'GET',
  data: slug,
})
  .then((data) => {
    dispatch({
      type: HIGHLIGHT.GET_HIGHLIGHT_ACTION,
      payload: data.data,
    });
  }).catch((err) => {
    const errors = err && 'Something went wrong!';
    dispatch({
      type: HIGHLIGHT.GET_HIGHLIGHT_ERROR_ACTION,
      payload: errors,
    });
  });

export default GetHighlightRequest;
