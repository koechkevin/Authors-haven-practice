import { mapStateToProps } from '../../containers/HomePageContainer';

it('correctly maps state to props', () => {
  const state = {
    article: {
      fetchAllArticles: jest.fn(),
    },
  };
  expect(mapStateToProps(state)).toHaveProperty('articles');
});
