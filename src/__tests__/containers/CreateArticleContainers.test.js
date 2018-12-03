import { mapStateToProps } from '../../containers/Articles/CreateArticleContainer';
import { postArticle } from '../../actions/articles.action';

it('correctly maps state to props', () => {
  const state = {
    article: postArticle({}),
  };
  expect(mapStateToProps(state)).toEqual({});
});
