import React, { Component } from 'react';
import { Icon, Row } from 'react-materialize';
import PropTypes from 'prop-types';


class LikeDislikeComponent extends Component {
  componentWillMount() {
    const { likeDislikeCount, slug } = this.props;
    likeDislikeCount(slug);
  }

  handlelikeDislike = (act) => {
    const { likeStatus, like, slug, likeDislikeCount } = this.props;
    if ((act && likeStatus === 'liked') || (!act && likeStatus === 'disliked')) {
      like(null, slug);
      likeDislikeCount(slug);
      return;
    }
    like({ likes: act }, slug);
    likeDislikeCount(slug);
  }

  render() {
    const { likesCount, likeStatus, dislikesCount } = this.props;
    return (
      <Row>
        <div className="like-dislike col-1 ">
          {/* eslint-disable-next-line */}
          <a onClick={() => this.handlelikeDislike(true)}>
            <Icon className={likeStatus === 'liked' ? 'filled_icon' : 'outline_icon'}>thumb_up</Icon>
          </a>
          <span className="count">{likesCount}</span>
          <br />
          {/* eslint-disable-next-line */}
          <a onClick={() => this.handlelikeDislike(false)}>
            <Icon className={likeStatus === 'disliked' ? 'filled_icon' : 'outline_icon'}>thumb_down</Icon>
          </a>
          <span className="count">{dislikesCount}</span>
        </div>
      </Row>
    );
  }
}

LikeDislikeComponent.propTypes = {
  likesCount: PropTypes.number.isRequired,
  likeStatus: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  likeDislikeCount: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  dislikesCount: PropTypes.number.isRequired,
};

export default LikeDislikeComponent;
