import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routeReducer } from 'react-router-redux';

export default ({ initialState = {}, reducers, middleware = [] }) => {
  const rootReducer = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
  }));

  return compose(
    applyMiddleware(thunkMiddleware, ...middleware)
  )(createStore)(rootReducer, initialState);
};
