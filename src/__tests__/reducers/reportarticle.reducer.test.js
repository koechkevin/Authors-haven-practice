import constants from '../../constants';
import state from '../../reducers/initialState';
import reportArticleReducer from '../../reducers/report.reducer';

const { REPORT_ARTICLE, RESET_STATUS } = constants;

const action = { payload: {} };

it('should return the initial state with no action', () => {
  expect(reportArticleReducer(state.report, action)).toEqual(state.report);
});

it('should handle RESET_STATUS', () => {
  action.type = RESET_STATUS;
  action.payload = state.report;
  expect(reportArticleReducer(state.report, action).failed).toEqual(false);
});

it('should handle REPORT_ARTICLE_PENDING', () => {
  action.type = `${REPORT_ARTICLE}_PENDING`;
  action.payload = state.report;
  expect(reportArticleReducer(state.report, action).loading).toEqual(true);
});

it('should handle REPORT_ARTICLE_FULFILLED', () => {
  action.type = `${REPORT_ARTICLE}_FULFILLED`;
  action.payload = state.report;
  expect(reportArticleReducer(state.report, action).success).toEqual(true);
});

it('should handle REPORT_ARTICLE_REJECTED', () => {
  action.type = `${REPORT_ARTICLE}_REJECTED`;
  action.payload = state.report;
  expect(reportArticleReducer(state.report, action).failed).toEqual(true);
});
