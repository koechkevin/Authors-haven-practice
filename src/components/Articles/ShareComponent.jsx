import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
} from 'react-share';
import config from '../../config/index';

class SocialShare extends Component {
  componentDidMount() {
  }

  render() {
    const { title, slug } = this.props;
    return (
      <div id="social-sharing">
        <WhatsappShareButton
          url={`${config.SHARE_URL}article/${slug}`}
          title={title}
          className="share-icons"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TwitterShareButton
          url={`${config.SHARE_URL}article/${slug}`}
          title={title}
          className="share-icons"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={`${config.SHARE_URL}article/${slug}`}
          quote={title}
          className="share-icons"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <EmailShareButton
          url={`${config.SHARE_URL}article/${slug}`}
          title={title}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    );
  }
}

SocialShare.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SocialShare;
