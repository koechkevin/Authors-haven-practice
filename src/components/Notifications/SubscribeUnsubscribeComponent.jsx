import React, { Component } from 'react';
import PropTypes from 'proptypes';

class SubscribeNotificationsComponent extends Component {
  componentWillMount() {
    const { subscribeNotifications } = this.props;
    subscribeNotifications('is-subscribed');
  }

  onClick = (event) => {
    event.preventDefault();
    const { isSubscribed, subscribeNotifications } = this.props;
    subscribeNotifications(isSubscribed ? 'unsubscribe' : 'subscribe');
  };

  render() {
    const { isSubscribed } = this.props;
    return (
      <div id="toggleButton">
        <span
          className="notification-text"
        >
          { isSubscribed ? 'You have subscribed to email notifications, to opt out, click the button to unsubscribe'
            : 'You have unsubscribed from notifications, click the button to subscribe'}
        </span>
        <input
          className={`toggleButton notification-subscription ${isSubscribed ? 'teal' : 'white'}`}
          type="submit"
          value={isSubscribed ? ' ON ' : 'OFF'}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

SubscribeNotificationsComponent.propTypes = {
  subscribeNotifications: PropTypes.func.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
};
export default SubscribeNotificationsComponent;
