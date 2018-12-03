import React, { Component } from 'react';
import Materialize from 'materialize-css';
import { Button } from 'react-materialize';
import PropTypes from 'prop-types';
import '../../assets/styles/ReportArticleComponent.scss';

class ReportArticleComponent extends Component {
    state = {
      reportMsg: '',
    };

    componentDidMount() {
      const { handleModal } = this.props;
      const elem = document.getElementById('modal1');
      this.instance = Materialize.Modal.init(
        elem, {
          onCloseStart: () => {
            handleModal();
          },
        });
      const textArea = document.querySelector('textarea#textarea2');
      Materialize.CharacterCounter.init(textArea, {});
    }

    componentDidUpdate(prevProps) {
      const { show, report } = this.props;
      const { success, failed } = report;
      if (show) {
        this.instance.open();
      }

      if (success && (prevProps.success !== success) && show) {
        Materialize.toast({ html: 'An email has been sent to the Admin' });
      } else if (failed && (prevProps.failed !== failed) && show) {
        Materialize.toast({ html: 'An error has occurred...' });
      }
    }

    handleSubmit = () => {
      const { slug, reportArticle, resetStatus } = this.props;
      const { reportMsg } = this.state;
      reportArticle(slug, reportMsg).then(() => {
        resetStatus();
        this.setState({ reportMsg: '' });
      });
    };

    handleClose = () => {
      const { resetStatus } = this.props;
      resetStatus();
      const elem = document.getElementById('modal1');
      const instance = Materialize.Modal.getInstance(elem);
      instance.close();
    };

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
      const { report } = this.props;
      const { loading, success } = report;
      const { reportMsg } = this.state;
      return (
        <div id="modal1" className="modal">
          {loading
          && (
            <div className="progress">
              <div className="indeterminate" />
            </div>
          )}
          <div className="modal-content">
            <h4>Report Article</h4>
            <p>Write a description why you are reporting</p>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  value={reportMsg}
                  name="reportMsg"
                  id="textarea2"
                  className="materialize-textarea"
                  data-length="120"
                  onChange={this.handleChange}
                />
                {/* eslint-disable-next-line */}
                <label htmlFor="textarea2">Textarea</label>
              </div>
            </div>
            <Button disabled={!!(loading || success)} onClick={this.handleSubmit}>Submit</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </div>
        </div>
      );
    }
}

ReportArticleComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  report: PropTypes.shape({
    loading: PropTypes.bool,
    success: PropTypes.bool,
  }),
  reportArticle: PropTypes.func.isRequired,
  resetStatus: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};

ReportArticleComponent.defaultProps = {
  report: {
    loading: false,
    success: false,
  },
};

export default ReportArticleComponent;
