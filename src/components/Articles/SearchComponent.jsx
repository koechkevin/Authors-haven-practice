import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  Input,
  Container,
  Row,
  Col,
  Pagination,
  Preloader,
} from 'react-materialize';
import Navbar from '../Navbar';
import config from '../../config';
import ListArticleComponent from './ListArticleComponent';
import OopsImage from '../../assets/img/oops.jpg';

class SearchComponent extends React.Component {
  state = {
    page: 1,
    searchText: '',
    fields: ['author', 'title', 'tag', 'description'],
    checkedFields: [],
  };

  componentDidMount() {
    const { search } = this.props;
    search();
  }

  onPageChange = (page) => {
    const { search } = this.props;
    const { searchText: text } = this.state;
    setTimeout(() => search(this.buildSearchQuery(text), page), config.SEARCH_DELAY);
    this.setState({ page });
  };

  onSearchTextChange = _.debounce((text) => {
    const { search } = this.props;
    search(this.buildSearchQuery(text));
    this.setState({ searchText: text, page: 1 });
  }, config.SEARCH_DELAY);

  onFieldsChange = (e) => {
    const { checkedFields, searchText: text } = this.state;
    const { name } = e.target;
    const { search } = this.props;
    const checked = checkedFields.indexOf(name) !== -1;
    this.setState({
      checkedFields: checked
        ? checkedFields.filter(field => field !== name)
        : [...checkedFields, name],
      page: 1,
    });
    setTimeout(() => search(this.buildSearchQuery(text)), config.SEARCH_DELAY);
  };

  buildSearchQuery = (text) => {
    const { checkedFields } = this.state;
    let query = '';
    if (checkedFields.length === 0) {
      query = `search=${text}`;
    } else {
      checkedFields.forEach((field, index) => {
        if (index === 0) {
          query += `${field}=${text}`;
        } else {
          query += `&${field}=${text}`;
        }
      });
    }
    return query;
  };

  render() {
    const { articles, loading } = this.props;
    const { fields, checkedFields, page } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <Row className="search">
            <Input
              s={12}
              onChange={e => this.onSearchTextChange(e.target.value)}
              placeholder="Type to search..."
            />
          </Row>
          <Row>
            <Col s={12}>
              <span className="left">Filter by:</span>
              {fields.map(field => (
                <Input
                  key={field}
                  name={field}
                  type="checkbox"
                  onChange={this.onFieldsChange}
                  label={`${field.charAt(0).toUpperCase()}${field.slice(1)}`}
                  checked={checkedFields.indexOf(field) !== -1}
                />
              ))}
            </Col>
          </Row>
          <Row className="search-articles">
            {loading ? (
              <Col offset="s5" s={2}>
                <Preloader color="teal" />
              </Col>
            ) : (
              <Col s={12} className="featured">
                {articles.count === 0 && (
                  <React.Fragment>
                    <img className="oops-image center" src={OopsImage} alt="No article found..." />
                    <p className="center"><i>Sorry, we could not find that article.</i></p>
                  </React.Fragment>
                )}
                {articles.results.map(article => (
                  <ListArticleComponent {...article} />
                ))}
                {articles.count > config.PAGE_SIZE && (
                  <Pagination
                    onSelect={this.onPageChange}
                    items={Math.ceil(articles.count / config.PAGE_SIZE)}
                    activePage={page}
                    maxButtons={5}
                  />
                )}
              </Col>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

SearchComponent.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchComponent;
