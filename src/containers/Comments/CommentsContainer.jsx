import { connect } from 'react-redux';
import CommentsComponent from '../../components/Comments/CommentsComponent';
import { getComments } from '../../actions/getComments.action';
import { updateComment } from '../../actions/updateComment.action';
import { deleteComment } from '../../actions/deleteComment.action';
import { postComment } from '../../actions/postComment.action';

export const mapStateToProps = state => ({
  payload: state.getComments,
});

export default connect(mapStateToProps,
  { getComments, updateComment, deleteComment, postComment })(CommentsComponent);
