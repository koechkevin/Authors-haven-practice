import { connect } from 'react-redux';
import { searchArticles } from '../../actions/articles.action';
import SearchComponent from '../../components/Articles/SearchComponent';

export const mapStateToProps = ({ article }) => ({ ...article.searchArticles });

export default connect(mapStateToProps, {
  search: searchArticles,
})(SearchComponent);
