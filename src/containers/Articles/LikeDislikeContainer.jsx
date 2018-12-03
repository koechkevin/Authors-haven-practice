import { connect } from 'react-redux';
import like, { likeDislikeCount } from '../../actions/likedislike.action';
import LikeDislikeComponent from '../../components/Articles/LikeDislikeComponent';

export const mapStateToProps = ({ likeDislike }) => likeDislike;

export default connect(mapStateToProps, { like, likeDislikeCount })(LikeDislikeComponent);
