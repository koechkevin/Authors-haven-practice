import React, { Component } from 'react';
import { Row, Col, Chip } from 'react-materialize';
import PropTypes from 'prop-types';


class UserArticlesComponent extends Component {
  componentDidMount() {
    const { userArticlesAction, match } = this.props;
    const { params } = match;
    userArticlesAction(params.username);
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.length !== 0
          ? (
            <div>
              <div className="stories container">
                <Row>
                  <Col m={12} s={12} className="user-articles">
                    <div id="stories-title">
                      <p>Latest</p>
                    </div>
                    {articles.map(article => (
                      <div key={article.slug} className="article">
                        <div className="article-title">
                          <a href={`/article/${article.slug}`}>{article.title}</a>
                        </div>
                        <p className="user">
                          <a className="grey-text user-name" href={`/profiles/${article.author.username}`}>
                            By
                            {' '}
                            {article.author.username}
                          </a>
                        </p>
                        {article.image_url
                          && <img alt="background" className="img-wrapper" src={`${article.image_url}`} />
                        }
                        <p>
                          {article.description}
                          <a id="read-more" href={`/article/${article.slug}`}>
                            {'... '}
                          Read more &raquo;
                          </a>
                        </p>
                        {article.tags
                            && article.tags.map(tag => <Chip key={tag}>{tag}</Chip>)
                          }
                      </div>
                    ))}
                  </Col>
                </Row>
              </div>
            </div>
          ) : <div className="bookmark-msg container"><p>You have no articles yet</p></div>
        }
      </div>
    );
  }
}

UserArticlesComponent.propTypes = {
  userArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({}).isRequired,
};

UserArticlesComponent.defaultProps = {
  articles: [],
};

export default UserArticlesComponent;
