import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import PropTypes from 'proptypes';
import swal from 'sweetalert';
import authUser from '../../utils/authUser.util';
import avatar from '../../assets/img/avatar.png';
import '../../assets/styles/Comments.scss';
import CommentsLikeContainer from '../../containers/Comments/CommentsLikeContainer';

class Comment extends Component {
  constructor(props) {
    super(props);
    const { body } = this.props;
    this.state = {
      showThreadButton: true,
      showHistory: false,
      showEdit: false,
      showReply: false,
      showComment: true,
      showDrop: false,
      showThreads: false,
      showButton: true,
      editText: body,
    };
  }

  onEdit = (event) => {
    event.preventDefault();
    const { slug, updateComment, id } = this.props;
    const { editText } = this.state;
    updateComment(slug, id, editText);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onReply = (event) => {
    event.preventDefault();
    const { slug, replyComment, id } = this.props;
    const { replyText } = this.state;
    replyComment(slug, id, replyText);
    this.setState({
      showReply: false, showButton: true,
    });
  };

  onDelete = (event) => {
    event.preventDefault();
    this.setState({ showDrop: false });
    const { slug, deleteComment, id } = this.props;
    swal({
      title: 'Confirm',
      text: 'Are you sure you want to delete?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(willDelete => (willDelete
        ? deleteComment(slug, id) : null),
      );
  };

  getClassName = (name, isVisible) => (isVisible ? `${name} visible` : `${name} hidden`);


  cancel = (event) => {
    event.preventDefault();
    this.setState({
      showEdit: false,
      showReply: false,
      showComment: true,
      showButton: true,
      showThreadButton: true,
    });
  };

  showHistory = () => {
    const { showHistory } = this.state;
    this.setState({
      showEdit: false,
      showReply: false,
      showComment: true,
      showDrop: false,
      showThreads: false,
      showButton: true,
      showThreadButton: true,
      showHistory: !showHistory,
    });
  };

  showReply = (event) => {
    event.preventDefault();
    this.setState({
      showReply: true, showButton: false,
    });
  };

  showEditText = () => {
    const { showEdit, showComment, showButton, showThreadButton } = this.state;
    this.setState({
      showEdit: !showEdit,
      showComment: !showComment,
      showButton: !showButton,
      showThreadButton: !showThreadButton,
      showReply: false,
      showDrop: false,
      showHistory: false,
    });
  };

  showThreads = () => {
    const { showThreads } = this.state;
    this.setState({
      showHistory: false,
      showEdit: false,
      showReply: false,
      showComment: true,
      showDrop: false,
      showButton: true,
      showThreadButton: true,
      showThreads: !showThreads,
    });
  };

  render() {
    const {
      history,
      author,
      body,
      createdAt,
      threads,
      imageUrl,
    } = this.props;

    const {
      editText,
      showHistory,
      showEdit,
      showReply,
      showComment,
      showDrop,
      showThreads,
      showButton,
      showThreadButton,
    } = this.state;
    return (
      <div className="card card-comment" id="show-drop">
        {authUser() === null || authUser().username !== author ? ('') : (
          <div
            className="right waves-effect waves-dark"
            tabIndex={-1}
            id="clickable"
            role="button"
            onKeyUp={() => this.setState({ showDrop: !showDrop })}
            onClick={() => this.setState({ showDrop: !showDrop })}
          >
            <Icon>more_vert</Icon>
          </div>
        ) }

        <span className={this.getClassName('drop card card-comment waves-effect waves-light', showDrop)}>
          <input type="submit" id="edit" value="Edit" onClick={this.showEditText} className="waves-effect" />
          <input type="submit" id="show-history" value="History" onClick={this.showHistory} className="waves-effect white" />
          <input type="submit" id="on-delete" value="Delete" onClick={this.onDelete} className="waves-effect white" />
        </span>
        <div className="row z-depth-0 reply-row">
          <img className="circle-thread circle z-depth-0 card-reply top" src={imageUrl === 'image-url' ? avatar : imageUrl} alt="avatar" />
          <div className="container-main z-depth-0">
            <div className="card-user z-depth">
              <a className="teal-text" href={`/profiles/${author}`}>{author}</a>
              <div id="date-created " className="black-text date-text">
                {new Date(createdAt).toDateString()}
              </div>
            </div>
            <div className={this.getClassName('card-main z-depth-0', showComment)}>
              <div id="comment-body">{body}</div>
            </div>
            <div id="reply-button">
              <input
                type="submit"
                id="thread-button"
                value="View Replies"
                onClick={this.showThreads}
                className={this.getClassName('teal-text waves-effect white', showThreadButton)}
              />
              {authUser()
                ? (
                  <input
                    type="submit"
                    id="show-reply"
                    value="Reply"
                    onClick={this.showReply}
                    className={this.getClassName('teal-text waves-effect white reply', showButton)}
                  />
                ) : ''
              }
              <br />
            </div>
          </div>
          {showEdit ? '' : <CommentsLikeContainer {...this.props} />}
        </div>
        <div className="edit-comment">
          <div className={this.getClassName('', showEdit)}>
            <form onSubmit={this.onEdit} id="edit-comment">
              <input type="text" required name="editText" id="edit-text" value={editText} className="materialize-textarea" onChange={this.onChange} />
              <input type="submit" value="EDIT" className="btn-primary right edit-comment white teal-text" />
              <input type="submit" name="cancelEdit" value="CANCEL" className="btn-primary right cancel-edit white teal-text" onClick={this.cancel} />
            </form>
          </div>
        </div>
        <div className={this.getClassName('card-threads z-depth-0 col s5', showThreads)}>
          {threads.map(thread => (
            <div key={thread.id} className="card card-comment z-depth-0 thread">
              <img
                className="circle-thread circle thread-avatar"
                src={thread.author.image_url === 'image-url' ? avatar : thread.author.image_url}
                alt="avatar"
              />
              <div className="container thread">
                <div className="card-username z-depth-0 push-s4">
                  <a className="teal-text" href={`/profiles/${thread.author.username}`}>{thread.author.username}</a>
                </div>
                <div className="card-body z-depth-0" id="comment-body">
                  {thread.body}
                </div>
                <div className="card-body z-depth-0 teal-text">
                  {new Date(thread.created_at).toDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="history-text card-threads">
          {history.map(data => (
            <div key={history.indexOf(data) + 1} id={data.body} className={this.getClassName('history', showHistory)}>
              <div className="teal-text" id="history-date">
                            (
                {new Date(data.created_at).toDateString()}
                            )
              </div>
              <div className="history-body">{data.body}</div>
            </div>
          ))}
        </div>
        <div className="Reply">
          <div className={this.getClassName('input-field reply-form', showReply)}>
            <div className="card card-comment z-depth-0 form-reply thread">
              <form onSubmit={this.onReply} id="submit-reply">
                <input
                  type="text"
                  required
                  rows={1}
                  name="replyText"
                  id="reply-text"
                  cols={20}
                  className="materialize-textarea"
                  placeholder="Leave a reply"
                  onChange={this.onChange}
                />
                <input type="submit" id="reply" value="REPLY" className="right teal-text" />
              </form>
              <input
                type="submit"
                value="CANCEL"
                id="cancel"
                className="waves-effect white right"
                onClick={() => this.setState({ showReply: false, showButton: true })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  updateComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  replyComment: PropTypes.func.isRequired,
  threads: PropTypes.arrayOf(PropTypes.any).isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default Comment;
