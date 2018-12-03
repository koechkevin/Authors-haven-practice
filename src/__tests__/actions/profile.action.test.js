import configureStore from 'redux-mock-store';
import {
  loadProfile,
  updateProfileAction,
  favouriteArticlesAction,
  userArticlesAction,
} from '../../actions/profile.actions';

const mockStore = configureStore();
const store = mockStore({});

describe('Profile Action tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('profile loading action', () => {
    store.dispatch(loadProfile());
    expect(store.getActions()[0].type).toBe('LOAD_PROFILE');
  });

  it('profile update action', () => {
    const userData = {
      username: 'gloria',
      bio: 'I am a woman in tech',
      imageUrl: 'https://res.cloudinary.com/dbk8ky24f/image/upload/v1542099331/ezdrqhphpprculkmpc6g.png',
    };
    store.dispatch(updateProfileAction(userData));
    expect(store.getActions()[0].type).toBe('UPDATE_PROFILE');
  });

  it('favourite articles loading action', () => {
    store.dispatch(favouriteArticlesAction());
    expect(store.getActions()[0].type).toBe('LOAD_FAVE_ARTICLES');
  });

  it('user articles loading action', () => {
    store.dispatch(userArticlesAction());
    expect(store.getActions()[0].type).toBe('LOAD_USER_ARTICLES');
  });
});
