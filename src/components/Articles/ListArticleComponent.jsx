import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from 'react-materialize';
import config from '../../config';

const ListArticleComponent = ({
  title,
  slug,
  tags,
  author,
  image_url: imageUrl,
  description,
}) => (
  <div key={slug} className="article">
    <div
      className="img-wrapper"
      style={{ background: `url('${imageUrl || config.PLACEHOLDER_IMAGE}') center center` }}
    >
      &nbsp;
    </div>
    <div>
      <a href={`/article/${slug}`}>{title}</a>
      <i className="grey-text author">
        By
        {' '}
        {author.username}
      </i>
      <p className="description">{description}</p>
      {tags
          && tags.map(tag => <Chip key={tag}>{tag}</Chip>)
      }
    </div>
  </div>
);

ListArticleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string,
  }),
  image_url: PropTypes.string,
  description: PropTypes.string.isRequired,
};

ListArticleComponent.defaultProps = {
  image_url: '',
  author: {
    username: '',
  },
};

export default ListArticleComponent;
