import CONSTANTS from '../constants';

const { HIGHLIGHT } = CONSTANTS;

function StoreHighlightRequest(data) {
  return { type: HIGHLIGHT.STORE_HIGLIGHT_ACTION, payload: data };
}

export default StoreHighlightRequest;
