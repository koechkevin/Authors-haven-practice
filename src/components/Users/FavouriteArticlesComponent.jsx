import React, { Component } from 'react';
import { Col, Chip, Row } from 'react-materialize';
import PropTypes from 'prop-types';

class FavouriteArticlesComponent extends Component {
  componentDidMount() {
    const { favouriteArticlesAction } = this.props;
    favouriteArticlesAction();
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.length !== 0
          ? (
            <div>
              <div className="profile-body">
                <div className="stories container">
                  <Row>
                    <Col m={12} s={12} className="user-articles">
                      <div id="stories-title">
                        <p>My favourites</p>
                      </div>
                      {articles.map(article => (
                        <div key={article.article.slug} className="article">
                          <div className="article-title">
                            <a href={`/article/${article.article.slug}`}>{article.article.title}</a>
                          </div>
                          <p className="fav">
                            <a className="grey-text user-name" href={`/profiles/${article.article.author.username}`}>
                              By
                              {' '}
                              {article.article.author.username}
                            </a>
                          </p>
                          {article.article.image_url
                            && <img alt="background" className="img-wrapper" src={`${article.article.image_url}`} />
                          }
                          <p>
                            {article.article.description}
                            <a id="read-more" href={`/article/${article.article.slug}`}>
                              {'...'}
                              Read more &raquo;
                            </a>
                          </p>
                          {article.article.tags
                            && article.article.tags.map(tag => <Chip key={tag}>{tag}</Chip>)
                          }
                        </div>
                      ))}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          ) : <div className="bookmark-msg container"><p>You have no bookmarked articles</p></div>
        }
      </div>
    );
  }
}

FavouriteArticlesComponent.propTypes = {
  favouriteArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
};

FavouriteArticlesComponent.defaultProps = {
  articles: [],
};

export default FavouriteArticlesComponent;
