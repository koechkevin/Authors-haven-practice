import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { Icon, Navbar as MaterialNavbar, NavItem } from 'react-materialize';
import LoginContainer from '../containers/Auth/LoginContainer';
import SignUpComponent from '../containers/Auth/SignUpContainer';
import Dropdown from './Dropdown';
import authUser from '../utils/authUser.util';

class Navbar extends React.Component {
  state = {
    loginModal: false,
    signupModal: false,
    menuOpen: false,
  };

  componentDidMount() {
    this.toggleModals();
  }

  onLogOut = () => {
    localStorage.clear();
    this.setState({
      menuOpen: false,
    });

    const { logOut, history } = this.props;
    logOut();
    history.push('/');
  }

  toggleMenu = () => {
    const { menuOpen } = this.state;

    this.setState({
      menuOpen: !menuOpen,
    });
  };

  toggleLoginModal = () => {
    const { loginModal } = this.state;

    this.setState({ loginModal: !loginModal });
  };

  toggleSignupModal = () => {
    const { signupModal } = this.state;

    this.setState({ signupModal: !signupModal });
  };

  toggleModals = () => {
    const { match } = this.props;

    if (match) {
      if (match.params.activateModal === 'login') {
        this.setState({ loginModal: true });
      } else if (match.params.activateModal === 'signup') {
        this.setState({ signupModal: true });
      }
    }
  };

  render() {
    const user = authUser();
    const { loginModal, menuOpen, signupModal } = this.state;

    return (
      <React.Fragment>
        <MaterialNavbar fixed className="white" brand={'Authors\' Haven'} right>
          {user
            ? (
              <React.Fragment>
                <NavItem href="/search"><Icon>search</Icon></NavItem>
                <NavItem href="#"><Icon>notifications_none</Icon></NavItem>
                <NavItem onClick={this.toggleMenu}><Icon>more_vert</Icon></NavItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavItem href="/search"><Icon>search</Icon></NavItem>
                <NavItem onClick={this.toggleLoginModal}>Login</NavItem>
                <NavItem onClick={this.toggleSignupModal}>Sign Up</NavItem>
              </React.Fragment>
            )
          }
        </MaterialNavbar>
        <Dropdown shown={menuOpen} onLogout={this.onLogOut} {...this.props} />

        <Modal
          open={loginModal}
          onClose={this.toggleLoginModal}
          classNames={{
            overlay: 'overlay-center',
            modal: 'custom-modal',
          }}
        >
          <div className="row">
            <div className="col s={2} image-wrapper">&nbsp;</div>
            <div className="col s={10}">
              <LoginContainer onLogin={this.toggleLoginModal} />
            </div>
          </div>
        </Modal>
        <Modal
          open={signupModal}
          onClose={this.toggleSignupModal}
          center
          classNames={{
            overlay: 'overlay-center',
            modal: 'custom-modal',
          }}
        >
          <div className="row">
            <div className="col s={2} image-wrapper">&nbsp;</div>
            <div className="col s={10}">
              <SignUpComponent />
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  match: PropTypes.shape({}).isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Navbar;
