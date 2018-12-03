// Fetch comments for highlights

import React, { Component } from 'react';
import { Card, Chip } from 'react-materialize';
import PropTypes from 'proptypes';

class HighlightsComments extends Component {
  state = {
  };

  render() {
    const { highlights } = this.props;
    let userHighlights;
    if (highlights) {
      userHighlights = highlights.map(highlight => (
        <Card>
          <Chip className="right">{highlight.author}</Chip>
          <p className="highlightedComment">{highlight.snippet}</p>
          <p>{highlight.comment}</p>
        </Card>
      ));
    }
    return (
      <div>
        <h4>{userHighlights ? 'Responses' : ''}</h4>
        {userHighlights}
      </div>
    );
  }
}

HighlightsComments.propTypes = {
  highlights: PropTypes.array.isRequired,
};

export default HighlightsComments;
