import { mapStateToProps } from '../../containers/Notifications/SubscribeUnsubscribeContainer';

describe('test notifications container', () => {
  it('maps state to props', () => {
    const state = {
      subscribeNotifications: {
        isSubscribed: false,
      },
    };
    const expectedOutput = {
      isSubscribed: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedOutput);
  });
});
