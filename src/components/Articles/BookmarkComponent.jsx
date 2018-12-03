import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import PropTypes from 'prop-types';

class Bookmark extends Component {
  componentWillMount() {
    const { slug, getFavourite } = this.props;
    getFavourite(slug);
  }

  handleBookmark = () => {
    const { slug, bookmarked, favourite } = this.props;
    favourite(slug, bookmarked);
  };

  render() {
    const { bookmarked } = this.props;
    return (
      <div className="row">
        { /* eslint-disable-next-line */}
        <div className="col-1 bookmarks" onClick={this.handleBookmark}>
          {bookmarked
            && <Icon>bookmark</Icon>
          }
          {!bookmarked
            && <Icon>bookmark_outline</Icon>
          }
        </div>
      </div>
    );
  }
}

Bookmark.propTypes = {
  slug: PropTypes.string.isRequired,
  favourite: PropTypes.func.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  user: PropTypes.shape({}).isRequired,
  getFavourite: PropTypes.func.isRequired,
};

export default Bookmark;
