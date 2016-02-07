import React from 'react';
import wireApp from './wire-app.js';

// returns a function that must be invoked to trigger render
const app = wireApp({ React }); // use all the defaults

// The app function will return your store so you can dispatch actions.
const store = app();

// Do stuff in your client app to trigger re-renders.
// e.g., subscribe to server updates, etc...
store.dispatch({
  type: 'SET_TITLE',
  title: 'Client render'
});
