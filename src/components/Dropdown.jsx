import React from 'react';
import PropTypes from 'prop-types';
import { Collection, CollectionItem } from 'react-materialize';
import authUser from '../utils/authUser.util';
import '../assets/styles/Dropdown.scss';

const Dropdown = ({ shown, onLogout, username }) => (
  <div className="dropdown" style={{ display: shown ? 'block' : 'none' }}>
    <Collection className="card">
      <CollectionItem>
        <a href="/article">New Story</a>
      </CollectionItem>
      <CollectionItem>
        {username
         && <a href={`/profiles/${username}`}>Profile</a>
        }
        {!username && authUser()
         && <a href={`/profiles/${authUser().username}`}>Profile</a> }
      </CollectionItem>
      <CollectionItem>
        { /* eslint-disable-next-line */ }
        <a href="/" onClick={onLogout}>Logout</a>
      </CollectionItem>
    </Collection>
  </div>
);

Dropdown.propTypes = {
  shown: PropTypes.bool,
  username: PropTypes.string,
  onLogout: PropTypes.func,
};

Dropdown.defaultProps = {
  shown: false,
  username: '',
  onLogout: () => {},
};

export default Dropdown;
