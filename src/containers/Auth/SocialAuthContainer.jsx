import { connect } from 'react-redux';
import SocialAuthAct from '../../actions/socialauth.action';
import SocialAuth from '../../components/Auth/SocialAuthComponent';

const mapStateToProps = state => ({
  social: state.social,
});
export default connect(mapStateToProps, { SocialAuthAct })(SocialAuth);
