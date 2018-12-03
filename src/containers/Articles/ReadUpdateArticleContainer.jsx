import { connect } from 'react-redux';
import { fetchArticle, updateArticle } from '../../actions/articles.action';
import { getRatings } from '../../actions/rating.action';
import { logOutAct } from '../../actions/login.action';
import ReadUpdateArticleComponent from '../../components/Articles/ReadUpdateArticleComponent';
import { getComments } from '../../actions/getComments.action';
import highlightRequest from '../../actions/highlight.action';
import GetHighlightRequest from '../../actions/getHighlight.action';
import StoreHighlightRequest from '../../actions/storeHighlightSnippet.action';

export const mapStateToProps = ({ article, highlight, getHighlight, highlightStore }) => ({
  fetchState: article.fetchArticle,
  updateState: article.updateArticle,
  ...highlight,
  ...getHighlight,
  ...highlightStore,
});

export default connect(mapStateToProps, {
  logOut: logOutAct,
  fetch: fetchArticle,
  update: updateArticle,
  getRatings,
  getComments,
  highlighting: highlightRequest,
  getHighlight: GetHighlightRequest,
  highlightStore: StoreHighlightRequest,
})(ReadUpdateArticleComponent);
