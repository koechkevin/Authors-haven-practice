import { connect } from 'react-redux';
import getStat from '../../actions/readingstats.action';
import readStats from '../../components/Users/ReadingStatsComponent';

export const mapStateToProps = ({ readingStats }) => readingStats;

export default connect(mapStateToProps, {
  getStat,
})(readStats);
