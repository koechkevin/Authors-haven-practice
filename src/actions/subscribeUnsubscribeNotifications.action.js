import { client } from '../api';
import constants from '../constants/index';

const { SUCCESSFUL, FAILED } = constants.NOTIFICATION_SUBSCRIPTION;

export default action => (dispatch) => {
  const url = `/notifications/${action}/`;
  return client({
    url,
    method: 'get',
  })
    .then((response) => {
      dispatch({
        type: SUCCESSFUL,
        isSubscribed: response.data.is_subscribed,
      });
    })
    .catch((error) => {
      dispatch({
        type: FAILED,
        error,
      });
    });
};
