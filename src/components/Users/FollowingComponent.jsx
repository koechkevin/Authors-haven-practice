import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Col, Row, Button } from 'react-materialize';
import authUser from '../../utils/authUser.util';

class FollowingComponent extends Component {
  componentDidMount() {
    const { followingAction, match } = this.props;
    const { params } = match;
    followingAction(params.username);
  }

  render() {
    const { match: { params } } = this.props;
    const { following, followUser } = this.props;
    return (
      <div>
        {following.length !== 0
          ? (
            <div className="container">
              <div id="stories-title">
                <span>
                  <strong>{following.length}</strong>
                  {' '}
                  Following
                </span>
              </div>
              <Row>
                {following.map(user => (
                  <Col m={4} s={12}>
                    <ul className="collection">
                      <li className="collection-item avatar">
                        <div className="user-data">
                          <div>
                            <img src={user.image_url === 'image-url' ? 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1542099331/ezdrqhphpprculkmpc6g.png' : user.image_url} alt={user.username} className="circle" />
                            <a href={`/profiles/${user.username}`} className="username"><strong>{user.username}</strong></a>
                            <p>
                              {user.bio}
                            </p>
                          </div>
                          {user.username !== authUser().username
                            ? (
                              <div>
                                {user.follow_status
                                  && <Button onClick={() => followUser(params.username, user.username, user.follow_status)} id="following-button">Following</Button>
                                }
                                {!user.follow_status
                                  && <Button onClick={() => followUser(params.username, user.username, user.follow_status)} id="follow-button">Follow</Button>
                                }
                              </div>
                            ) : ''
                          }
                        </div>
                      </li>
                    </ul>
                  </Col>
                ))}
              </Row>
            </div>
          ) : <div className="bookmark-msg container"><p>You are not following anyone at the moment.</p></div>
      }
      </div>
    );
  }
}

FollowingComponent.propTypes = {
  followUser: PropTypes.func.isRequired,
  followingAction: PropTypes.func.isRequired,
  following: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({}).isRequired,
};

FollowingComponent.defaultProps = {
  following: [],
};

export default FollowingComponent;
