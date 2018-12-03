
import PropTypes from 'prop-types';
import React from 'react';


const AverageRating = ({ averageRating }) => (
  <div>
    {averageRating === 0
        || averageRating === undefined ? (
          <div className="average-rating">
            <i className="large material-icons no-average">star</i>
            <p className="white-text rating-text">{averageRating.toFixed(1)}</p>
            <p className="average-rating-font">Average Rating</p>
          </div>
      ) : (
        <div className="averageRating">
          <i className="large material-icons average">star</i>
          <p className="white-text rating-text">{averageRating.toFixed(1)}</p>
          <p className="average-rating-font">Average Rating</p>
        </div>
      )}
  </div>
);

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
};
export default AverageRating;
