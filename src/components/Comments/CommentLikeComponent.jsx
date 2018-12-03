import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import PropTypes from 'proptypes';

export class CommentsLike extends Component {
  componentDidMount() {
    const { fetchComment, slug, id } = this.props;
    fetchComment(slug, id);
  }

  render() {
    const { commentLike, id, slug } = this.props;
    // eslint-disable-next-line
    const { likeStatus, likeCount } = this.props[id] || { likeStatus: false, likeCount: 0 };
    return (
      <span>
        { /* eslint-disable-next-line */ }
        <a
          id="likeComm"
          onClick={() => commentLike({ id, slug, liked: likeStatus })}
        >
          <Icon className={likeStatus === true ? 'filled_icon' : 'outline_icon'}>thumb_up</Icon>
        </a>
        {likeCount}
      </span>
    );
  }
}
CommentsLike.propTypes = {
  slug: PropTypes.string.isRequired,
  commentLike: PropTypes.func.isRequired,
  fetchComment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default CommentsLike;
