import { connect } from 'react-redux';
import CreateArticleComponent from '../../components/Articles/CreateArticleComponent';
import { postArticle } from '../../actions/articles.action';
import { logOutAct } from '../../actions/login.action';

export const mapStateToProps = ({ article }) => ({
  postArticle: article.postArticle,
});

export default connect(mapStateToProps, {
  publish: postArticle,
  logOut: logOutAct,
})(CreateArticleComponent);
