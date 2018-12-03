import configureStore from 'redux-mock-store';
import reportArticle, { resetStatus } from '../../actions/report.actions';

const mockStore = configureStore();
const store = mockStore({});
const slug = 'test-slug';
const report = 'I dont like this article';

describe('Test articles actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('send post reportArticle', () => {
    store.dispatch(reportArticle(slug, report));
    expect(store.getActions()[0].type).toBe('REPORT_ARTICLE');
  });

  it('send resetStatus', () => {
    store.dispatch(resetStatus());
    expect(store.getActions()[0].type).toBe('RESET_STATUS');
  });
});
