import { connect } from 'react-redux';
import { updateComment } from '../../actions/updateComment.action';
import { deleteComment } from '../../actions/deleteComment.action';
import { replyComment } from '../../actions/replyComment.action';
import CommentBlockComponent from '../../components/Comments/CommentBlockComponent';

export default connect(null, { updateComment, deleteComment, replyComment })(CommentBlockComponent);
