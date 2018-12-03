import { mapStateToProps } from '../../containers/Articles/SearchContainer';


it('correctly maps state to props', () => {
  const state = {
    article: {
      searchArticles: {
        articles: {
          results: [],
        },
        loading: false,
      },
    },
  };

  expect(mapStateToProps(state)).toHaveProperty('loading');
});
