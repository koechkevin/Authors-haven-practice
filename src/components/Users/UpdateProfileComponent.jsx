import React, { Component } from 'react';
import { Input, Row, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import uploader from '../../utils/uploader.util';
import Navbar from '../Navbar';
import authUser from '../../utils/authUser.util';

class UpdateProfileComponent extends Component {
  constructor(props) {
    super(props);
    const { profileReducer } = this.props;
    this.state = {
      username: profileReducer.profile.username,
      bio: profileReducer.profile.bio,
      imageUrl: profileReducer.profile.image_url,
    };
  }

  componentDidUpdate(prevProps) {
    const { history, updateProfileReducer } = this.props;
    if (!prevProps.updateProfileReducer.success && updateProfileReducer.success) {
      if (updateProfileReducer.success) {
        const user = authUser;
        localStorage.setItem('user', JSON.stringify({ ...user, ...updateProfileReducer.userProfile.profile }));
        history.push(`/profiles/${updateProfileReducer.userProfile.profile.username}`);
      }
    }
  }

  onEdit = (event) => {
    event.preventDefault();
    const { updateProfileAction } = this.props;
    updateProfileAction(this.state);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  fileSelectHandler = (event) => {
    const selectedFile = event.target.files[0];
    uploader({
      image: selectedFile,
      progress: () => {},
      onSuccess: (url) => {
        this.setState({
          image_url: url,
        });
      },
    });
  }

  render() {
    const { updateProfileReducer, profileReducer } = this.props;
    const { username, bio, imageUrl } = this.state;
    return (
      <div>
        <Navbar {...this.props} />
        <div className="container edit-profile">
          <Row>
            <form s={6} onSubmit={this.onEdit}>
              <div className="user-data">
                <div className="user-image">
                  {/* eslint-disable-next-line */}
                  <img src={imageUrl === 'image-url' ? 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1542099331/ezdrqhphpprculkmpc6g.png' : imageUrl}
                    alt={username}
                    onClick={() => this.fileInput.click()}
                  />
                  {/* eslint-disable-next-line */}
                  <a onClick={() => this.fileInput.click()}>
                    <Icon className="edit-icon">edit</Icon>
                  </a>
                </div>
                <input
                  type="file"
                  onChange={this.fileSelectHandler}
                  className="file-input"
                  ref={(fileInput) => { this.fileInput = fileInput; }}
                />
              </div>
              <Row>
                <Input
                  name="username"
                  placeholder="Username"
                  type="text"
                  label="Username"
                  onChange={this.handleChange}
                  defaultValue={username}
                  className="input-field"
                  minLength="4"
                  required
                  s={12}
                />
                {updateProfileReducer.errors
                  && <p className="alert-err">{updateProfileReducer.errors.username}</p>
                }
                <Input
                  name="bio"
                  placeholder="Bio"
                  type="text"
                  label="Bio"
                  onChange={this.handleChange}
                  defaultValue={bio}
                  className="input-field"
                  minLength="1"
                  required
                  s={12}
                />
                {updateProfileReducer.errors
                  && <p className="alert-err">{updateProfileReducer.errors.bio}</p>
                }
              </Row>
              <Row className="update-button">
                <Button type="submit" className="waves-effect waves-light btn" id="edit-button">Save</Button>
                <Link to={`/profiles/${username === '' ? profileReducer.profile.username : username}`} className="waves-effect waves-light btn" id="cancel-button">Cancel</Link>
              </Row>
            </form>
          </Row>
        </div>
      </div>
    );
  }
}

UpdateProfileComponent.propTypes = {
  updateProfileAction: PropTypes.func.isRequired,
  updateProfileReducer: PropTypes.shape({}).isRequired,
  profileReducer: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  success: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.shape({}),
  match: PropTypes.shape({}),
};

UpdateProfileComponent.defaultProps = {
  profile: {},
  match: { params: { username: '' } },
};

export default UpdateProfileComponent;
