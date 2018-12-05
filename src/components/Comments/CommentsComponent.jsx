import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Comment from '../../containers/Comments/CommentContainer';
import '../../assets/styles/Comments.scss';
import { CreateCommentContainer } from '../../containers/Comments/CommentContainer';

class CommentsComponent extends Component {
  componentWillMount() {
    const { getComments, slug } = this.props;
    getComments(slug);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { postComment, slug } = this.props;
    const { commentText } = this.state;
    postComment(slug, commentText);
  };

  loadingProgress = () => (
    <div className="loader-element" id="progress-bar">
      <p />
    </div>
  );

  render() {
    const { payload, slug, commentLike, authorized } = this.props;
    return (
      payload.loading || payload.data.comments === undefined ? this.loadingProgress()
        : (
          <div>
            <h4> Comments</h4>
            <div className={authorized ? 'visible' : 'hidden'}>
            <CreateCommentContainer slug={slug}/>
            </div>
            <div id="comments">
              {payload.data.comments.map(data => (
                <div key={data.id}>
                  <Comment
                    id={data.id}
                    history={data.history}
                    slug={slug}
                    commentLike={commentLike}
                    author={data.author.username}
                    body={data.body}
                    imageUrl={data.author.image_url}
                    createdAt={data.created_at}
                    threads={data.threads}
                    likeCount={data.comment_like_count}
                  />
                </div>
              ))}
            </div>
          </div>
        )
    );
  }
}

CommentsComponent.propTypes = {
  slug: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  payload: PropTypes.shape({}).isRequired,
  commentLike: PropTypes.func.isRequired,
};

export default CommentsComponent;
