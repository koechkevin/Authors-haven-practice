import React from 'react';
import { Col, Card } from 'react-materialize';
import PropTypes from 'proptypes';

const SuccessMessage = ({ text }) => (
  <Col m={6} s={12}>
    <Card className="teal darken-1" textClassName="white-text">
      {text}
    </Card>
  </Col>
);

SuccessMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SuccessMessage;
