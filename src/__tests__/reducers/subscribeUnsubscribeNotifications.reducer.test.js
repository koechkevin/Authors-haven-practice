import reducer from '../../reducers/subscribeUnsubscribeNotifications.reducer';
import initialState from '../../reducers/initialState';

describe('test notification subscription reducer', () => {
  it('changes state with action type SUCCESSFUL', () => {
    const action = ({
      type: 'SUCCESSFUL',
      isSubscribed: true,
    });
    const testReducer = reducer(initialState.notificationSubscription, action);
    const expectedOutput = {
      isSubscribed: true,
      error: {},
    };
    expect(testReducer).toEqual(expectedOutput);
  });

  it('changes state with action type FAILED', () => {
    const action = ({
      type: 'FAILED',
      error: { error: 'this is an error' },
    });
    const testReducer = reducer(initialState.notificationSubscription, action);
    const expectedOutput = {
      isSubscribed: false,
      error: { error: 'this is an error' },
    };
    expect(testReducer).toEqual(expectedOutput);
  });

  it('returns initial state when action type is not successful or failed', () => {
    const action = ({
      type: 'OTHER ',
    });
    const testReducer = reducer(initialState.notificationSubscription, action);
    expect(testReducer).toEqual(initialState.notificationSubscription);
  });
});
