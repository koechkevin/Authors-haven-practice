import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-animated-slider';
import { Row, Col, Pagination } from 'react-materialize';
import config from '../config';
import Navbar from './Navbar';
import EmptyArticlesComponent from './EmptyArticlesComponent';
import ListArticleComponent from './Articles/ListArticleComponent';
import '../assets/styles/HomePageComponent.scss';

class HomePageComponent extends React.Component {
  state = {
    page: 1,
  };

  componentDidMount() {
    const { fetchAll } = this.props;
    fetchAll();
  }

  onPageChange = (page) => {
    const { fetchAll } = this.props;
    fetchAll(page);
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    const { articles, history } = this.props;
    const articlesAvailable = (articles && articles.results && articles.results.length);

    return (
      <React.Fragment>
        <Navbar {...this.props} />
        {(!articlesAvailable)
          ? (
            <EmptyArticlesComponent />
          ) : (
            <React.Fragment>
              <Slider autoplay duration={6000} className="slider-wrapper">
                {articles.banner.map(item => (
                  <div
                    key={item.slug}
                    className="slider-content"
                    style={{ background: `url('${item.image_url}') no-repeat center center` }}
                  >
                    <div className="inner">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <button onClick={() => history.push(`article/${item.slug}`)} type="button">Read More</button>
                    </div>
                    <section>
                      <img src={item.author.image_url} alt="" />
                      <span>
                        Posted by
                        {' '}
                        <strong>
                          <a href={`/profiles/${item.author.username}`}>
                            {item.author.username}
                          </a>
                        </strong>
                      </span>
                    </section>
                  </div>
                ))}
              </Slider>
              <div className="container-fluid home-articles">
                <Row>
                  <Col m={9} s={12} className="featured">
                    <h5 className="header">Featured Articles</h5>
                    {articles.results.map(article => (
                      <ListArticleComponent key={article.slug} {...article} />
                    ))}
                    {articles.count > config.PAGE_SIZE
                      && (
                      <Pagination
                        onSelect={this.onPageChange}
                        items={Math.ceil(articles.count / config.PAGE_SIZE)}
                        activePage={page}
                        maxButtons={5}
                      />
                      )
                    }
                  </Col>
                  <Col m={3} s={12} className="recent">
                    <h5 className="header">Recent Articles</h5>
                    {articles.recent.map(article => (
                      <div key={article.slug} className="article card">
                        <a href={`/article/${article.slug}`}>
                          <div
                            className="img-wrapper"
                            style={{ background: `url('${article.image_url || config.PLACEHOLDER_IMAGE}') top center` }}
                          >
                            &nbsp;
                          </div>
                          <div className="inner">
                            <p className="title" href={`/article/${article.slug}`}>{article.title}</p>
                            <span>
                              <i className="grey-text">
                                By
                                {' '}
                                {article.author.username}
                              </i>
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </Col>
                </Row>
              </div>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

HomePageComponent.propTypes = {
  history: PropTypes.shape({}),
  fetchAll: PropTypes.func.isRequired,
  articles: PropTypes.shape({}),
  logOut: PropTypes.func.isRequired,
};

HomePageComponent.defaultProps = {
  history: {},
  articles: {},
};

export default HomePageComponent;
