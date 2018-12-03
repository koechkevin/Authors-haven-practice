import initialState from './initialState';
import constants from '../constants/index';

const { SUCCESSFUL, FAILED } = constants.NOTIFICATION_SUBSCRIPTION;

const notificationSubscriptionReducer = (state = initialState.notificationSubscription, action) => {
  switch (action.type) {
    case SUCCESSFUL:
      return {
        ...state,
        isSubscribed: action.isSubscribed,
      };

    case FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default notificationSubscriptionReducer;
