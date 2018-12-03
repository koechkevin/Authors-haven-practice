import api from '../api';
import constants from '../constants';

const { REPORT_ARTICLE, RESET_STATUS } = constants;

const reportArticle = (slug, data) => ({
  type: REPORT_ARTICLE,
  payload: api({
    method: 'POST',
    url: `/articles/${slug}/report/`,
    data: {
      report: {
        report_msg: data,
      },
    },
  }),
});

export const resetStatus = () => ({
  type: RESET_STATUS,
});

export default reportArticle;
