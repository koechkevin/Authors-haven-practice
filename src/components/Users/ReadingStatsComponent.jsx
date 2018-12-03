import React, { Component } from 'react';
import { Table } from 'react-materialize';
import PropTypes from 'prop-types';


class StatsComponent extends Component {
  componentWillMount() {
    const { getStat } = this.props;
    getStat();
  }

  render() {
    const { stats } = this.props;
    return (
      <div className="container">
        <Table striped>
          <thead className="no-bottom">
            <tr>
              <th>Article</th>
              <th>Views</th>
              <th>Comments</th>
            </tr>
          </thead>
          {stats.length > 0 ? (
            <tbody className="stat-body">
              {stats.map(stat => (
                <tr key={stat.slug}>
                  <td><a href={`/article/${stat.slug}`}>{stat.title}</a></td>
                  <td>{stat.view_count}</td>
                  <td>{stat.comment_count}</td>
                </tr>
              ),
              )}
            </tbody>)
            : <div className="bookmark-msg container"><p>You have no published articles</p></div>
          }
        </Table>
      </div>
    );
  }
}

StatsComponent.propTypes = {
  stats: PropTypes.array.isRequired,
  getStat: PropTypes.func,
};

StatsComponent.defaultProps = {
  getStat: () => {},
};

export default StatsComponent;
