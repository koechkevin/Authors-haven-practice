import { connect } from 'react-redux';
import ReportArticleComponent from '../../components/Articles/ReportArticleComponent';
import reportArticle, { resetStatus } from '../../actions/report.actions';

export const mapStateToProps = state => ({
  report: state.reportArticleReducer,
});

export default connect(mapStateToProps, { reportArticle, resetStatus })(ReportArticleComponent);
