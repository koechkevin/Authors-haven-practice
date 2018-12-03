import { connect } from 'react-redux';
import { commentLike, fetchComment } from '../../actions/likeComment.action';
import commentsLikeComponent from '../../components/Comments/CommentLikeComponent';

const mapStateToProps = ({ likeComment }) => likeComment;

export default connect(
  mapStateToProps,
  { commentLike, fetchComment },
)(commentsLikeComponent);
