import React from 'react';
import { Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import EditorComponent from './EditorComponent';
import TagsComponent from './TagsComponent';


class CreateArticleComponent extends React.Component {
  state = {
    visible: false,
  };

  componentDidUpdate(prevProps) {
    const { history, postArticle, alert } = this.props;
    if (!prevProps.success && postArticle.success) {
      alert.show('Successfully published article!');
      history.push(`/article/${postArticle.article.slug}`);
    }
  }

  onPublish = () => {
    const { publish } = this.props;
    publish(this.state);
  };

  onArticleChange = (article) => {
    this.setState(article);
  };

  onTagsChange = (tags) => {
    this.setState({
      tags,
    });
  };

  handleDropDown = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };


  render() {
    const { visible } = this.state;
    const defaultContent = {
      blocks: [{ text: '', type: 'header-two' }], entityMap: {},
    };
    return (
      <div>
        <Navbar {...this.props} />
        <div className="container" style={{ marginTop: '20px' }}>
          <Row>
            <Col s={12}>
              { /* eslint-disable-next-line */ }
              <p onClick={this.handleDropDown} className="publish-btn teal-text">Add Tags </p>
              <TagsComponent
                visible={visible}
                onPublish={this.onPublish}
                onTagsChange={this.onTagsChange}
              />
            </Col>
            <Col s={12} className="editor">
              <EditorComponent
                spellcheck
                content={defaultContent}
                onChange={this.onArticleChange}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

CreateArticleComponent.propTypes = {
  alert: PropTypes.shape({}).isRequired,
  publish: PropTypes.func.isRequired,
  postArticle: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
  logOut: PropTypes.func.isRequired,
};

CreateArticleComponent.defaultProps = {
  postArticle: {},
};

export default CreateArticleComponent;
