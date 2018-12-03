import { mapStateToProps } from '../../containers/Articles/ReadUpdateArticleContainer';


it('correctly maps state to props', () => {
  const state = {
    article: {
      fetchArticle: jest.fn(),
      updateArticle: jest.fn(),
    },
  };

  expect(mapStateToProps(state)).toHaveProperty('fetchState');
});
