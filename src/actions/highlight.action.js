import api from '../api';
import CONSTANTS from '../constants';

const { HIGHLIGHT } = CONSTANTS;

const highlightRequest = (slug, highlight) => dispatch => api({
  url: `/articles/${slug}/highlight/`,
  method: 'POST',
  data: { ...highlight },
})
  .then((data) => {
    dispatch({
      type: HIGHLIGHT.HIGHLIGHTING_ACTION,
      payload: data.data,
    });
  }).catch((err) => {
    const errors = err && 'Something went wrong!';
    dispatch({
      type: HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION,
      payload: errors,
    });
  });

export default highlightRequest;
