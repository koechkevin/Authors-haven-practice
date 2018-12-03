import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Col, ProgressBar, Row } from 'react-materialize';
import CommentBlockContainer from '../../containers/Comments/CommentBlockContainer';
import '../../assets/styles/Comments.scss';
import authUser from '../../utils/authUser.util';

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
      <Row>
        <Col s={12}>
          <ProgressBar />
        </Col>
      </Row>
    </div>
  );

  render() {
    const { payload, slug, commentLike } = this.props;
    return (
      payload.loading || payload.data.comments === undefined ? this.loadingProgress()
        : (
          <div>
            <h4> Comments</h4>
            <form id="comment-form" className={`input-field col s11 ${authUser() ? 'visible' : 'hidden'}`} onSubmit={this.onSubmit}>
              <input type="text" required id="comment-text" name="commentText" className="materialize-textarea" placeholder="Write a comment" onChange={this.onChange} />
              <input type="submit" value="SUBMIT" className="btn-primary right" />
            </form>
            <br />
            <div id="comments">
              {payload.data.comments.map(data => (
                <div key={data.id}>
                  <CommentBlockContainer
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
