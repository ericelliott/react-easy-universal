import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routeReducer } from 'redux-simple-router';

export default ({ initialState = {}, reducers }) => {
  const logger = createLogger();
  const rootReducer = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
  }));

  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};
