import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {
  averageRating,
  rateArticle,
  failedRating,
  rateArticleAction,
  getRatings,
} from '../../actions/rating.action';
import ARTICLE from '../../mock/article';

const middlewares = [
  thunkMiddleware,
  promiseMiddleware(),
];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const mocker = new MockAdapter(axios);
const url = '/api/articles/hi-there/rate';

describe('rate article action', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('rate article action received valid data and dispatched rate article action', () => {
    store.dispatch(rateArticle({
      avg_rating: 2,
      rating: 3,
    }));
    const expectedOutput = [{
      payload: {
        averageRating: 2,
        rating: 3,
      },
      type: 'RATE_ARTICLE',
    }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('article not rated before receives null and resolves to zero', () => {
    store.dispatch(rateArticle({
      avg_rating: null,
      rating: null,
    }));
    const expectedOutput = [{
      payload: {
        averageRating: 0,
        rating: 0,
      },
      type: 'RATE_ARTICLE',
    }];
    expect(store.getActions()).toEqual(expectedOutput);
  });

  it('action received an error. It should update the state with an error', () => {
    store.dispatch(failedRating('error'));
    const expectedOutput = 'RATING_ERROR';
    expect(store.getActions()[0].type).toBe(expectedOutput);
    expect(store.getActions()[0].payload).toEqual({
      ratingError: 'error',
    });
  });

  it('updates store with average Rating received. action type equals AVERAGE RATING', () => {
    store.dispatch(averageRating(4));
    const expectedOutput = {
      payload: {
        averageRating: 4,
      },
      type: 'AVERAGE_RATING',
    };
    expect(store.getActions()[0]).toEqual(expectedOutput);
  });

  it('sets avetrage rating to 0 if null value received', () => {
    store.dispatch(averageRating(null));
    expect(store.getActions()[0].payload.averageRating).toEqual(0);
  });

  it('mocks axios post request', () => {
    const response = ARTICLE.getRatingData;
    mocker.onGet(url).reply(200, response);
    store.dispatch(getRatings('hi-there'));
    expect(store.getActions()).toEqual([]);
  });

  it('mocks axios get request', () => {
    const response = ARTICLE.getRatingData;
    const request = ARTICLE.postRequestData;
    mocker.onPost(url, request).reply(200, response);
    store.dispatch(rateArticleAction('hi-there', 4));
    expect(store.getActions()).toEqual([]);
  });
});
