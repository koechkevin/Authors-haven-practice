import { mapStateToProps } from '../../containers/Articles/ReportArticlesContainer';

it('correctly maps state to props', () => {
  const state = {
    report: {
      loading: false,
    },
  };

  expect(mapStateToProps(state)).toHaveProperty('report');
});
