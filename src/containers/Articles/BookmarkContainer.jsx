import { connect } from 'react-redux';
import Bookmark from '../../components/Articles/BookmarkComponent';
import { favourite, getFavourite } from '../../actions/bookmark.action';

export const mapStateToProps = state => ({ ...state.bookmarkReducer });

export default connect(mapStateToProps, { favourite, getFavourite })(Bookmark);
