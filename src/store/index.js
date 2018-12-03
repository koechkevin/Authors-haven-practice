import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsCreators and other options if needed here
});

const storeConfig = () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
    logger,
  ];
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );
  return store;
};

export default storeConfig;
