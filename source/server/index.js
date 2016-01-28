import { match } from 'react-router';

import renderLayout from './render-layout.js';
import render from './render.js';

import configureStore from './configure-store.js';

export default ({ React, createRoutes, reducers }) => (req, res) => {
  const routes = createRoutes(React);

  const store = configureStore({
    initialState: res.locals.context,
    reducers
  });
  const initialState = store.getState();

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const rootMarkup = render(React)(renderProps, store);
      res.status(200).send(renderLayout({ rootMarkup, initialState }));
    } else {
      res.status(404).send('Not found');
    }
  });
};
