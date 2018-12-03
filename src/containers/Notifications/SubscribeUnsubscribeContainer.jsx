import { connect } from 'react-redux';
import SubscribeUnsubscribeComponent from '../../components/Notifications/SubscribeUnsubscribeComponent';
import subscribeNotifications from '../../actions/subscribeUnsubscribeNotifications.action';

export const mapStateToProps = state => ({
  isSubscribed: state.subscribeNotifications.isSubscribed,
});

export default connect(mapStateToProps, { subscribeNotifications })(SubscribeUnsubscribeComponent);
