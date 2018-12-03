import { combineReducers } from 'redux';
import reset from './resetPassword.reducer';
import resetting from './resettingPassword.reducer';
import article from './articles.reducer';
import signUp from './signup.reducer';
import loginReducer from './login.reducer';
import SocialAuthReducer from './socialauth.reducer';
import ratingReducer from './rating.reducer';
import verifyReducer from './verification.reducer';
import profileReducer from './profile.reducer';
import updateProfileReducer from './updateProfile.reducer';
import userArticlesReducer from './userArticles.reducer';
import favouriteArticlesReducer from './favouriteArticles.reducer';
import bookmarkReducer from './bookmark.reducer';
// eslint-disable-next-line
import likeComment from './commentLike.reducer';
import subscribeNotifications from './subscribeUnsubscribeNotifications.reducer';
import getComments, { postCommentsReducer, updateCommentsReducer, deleteCommentReducer, replyCommentReducer } from './comments.reducer';
import likeDislike from './likedislike.reducer';
import followUserReducer from './follow.reducer';
import followersReducer from './followers.reducer';
import followingReducer from './following.reducer';
import reportArticleReducer from './report.reducer';
import highlight from './highlight.reducer';
import getHighlight from './getHighlight.reducer';
import storeHighlights from './storeHiglights.reducer';
import readingStats from './readingstats.reducer';

const rootReducer = combineReducers({
  reset,
  resetting,
  article,
  signUp,
  loginReducer,
  social: SocialAuthReducer,
  ratingReducer,
  verifyReducer,
  profileReducer,
  updateProfileReducer,
  userArticlesReducer,
  favouriteArticlesReducer,
  bookmarkReducer,
  updateComments: updateCommentsReducer,
  getComments,
  postComments: postCommentsReducer,
  replyComments: replyCommentReducer,
  deleteComment: deleteCommentReducer,
  likeDislike,
  followUserReducer,
  followersReducer,
  followingReducer,
  highlight,
  getHighlight,
  storeHighlights,
  likeComment,
  subscribeNotifications,
  reportArticleReducer,
  readingStats,
});

export default rootReducer;
