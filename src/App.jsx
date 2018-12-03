import React from 'react';
import { withAlert } from 'react-alert';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import HomePageContainer from './containers/HomePageContainer';
import CreateArticleComponent from './containers/Articles/CreateArticleContainer';
import SearchComponent from './containers/Articles/SearchContainer';
import ReadUpdateArticleContainer from './containers/Articles/ReadUpdateArticleContainer';
import ForgotPasswordContainer from './containers/Auth/ForgotPasswordContainer';
import ResetPasswordContainer from './containers/Auth/ResetPasswordContainer';
import Profile from './containers/Users/UserProfileContainer';
import UpdateProfile from './containers/Users/UpdateProfileContainer';
import './App.scss';
import VerificationContainer from './containers/Auth/VerificationContainer';
import SignUpSuccess from './components/Messages/SignUpSuccess';


library.add(faFlag);

require('dotenv').config();

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={HomePageContainer} />
      <Route path="/users/:activateModal?" exact component={HomePageContainer} />
      <Route path="/forgot_password" exact component={ForgotPasswordContainer} />
      <Route path="/reset_password/:token" exact component={withAlert(ResetPasswordContainer)} />
      <Route path="/article" exact component={withAlert(CreateArticleComponent)} />
      <Route path="/search" exact component={SearchComponent} />
      <Route path="/article/:slug" exact component={withAlert(ReadUpdateArticleContainer)} />
      <Route path="/signup/success" exact component={SignUpSuccess} />
      <Route path="/verify/:token" exact component={VerificationContainer} />
      <Route path="/profiles/:username" exact component={Profile} />
      <Route path="/profiles/update-info/:username" exact component={UpdateProfile} />
    </Switch>
  </div>
);

export default App;
