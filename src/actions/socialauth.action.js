import api from '../api';
import constants from '../constants';

const { SOCIALLOGIN } = constants;

const SocialAuthAct = socialdata => (
  {

    type: SOCIALLOGIN,
    payload: api({
      url: '/social_auth/',
      method: 'post',
      data: socialdata,
    }),
  });

export default SocialAuthAct;
