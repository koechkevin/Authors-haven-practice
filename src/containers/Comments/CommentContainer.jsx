import { connect } from 'react-redux';
import Comment from '../../components/Comments/Comment';
import CreateComment from '../../components/Comments/CreateCommentComponent';
import EditComponent from "../../components/Comments/EditCommentComponent";
import ReplyComponent from "../../components/Comments/ReplyCommentComponent";
import {postComment} from "../../actions/postComment.action";
import {replyComment} from "../../actions/replyComment.action";
import {deleteComment} from "../../actions/deleteComment.action";
import {updateComment} from "../../actions/updateComment.action";
import {mapStateToProps} from "./CommentsContainer";

export const ReplyContainer = connect(mapStateToProps, {replyComment})(ReplyComponent);
export const EditContainer = connect(null, { updateComment })(EditComponent);
export const CreateCommentContainer = connect(mapStateToProps,
    { postComment, updateComment })(CreateComment);
export default connect(null, { updateComment, deleteComment })(Comment);
