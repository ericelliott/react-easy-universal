const moduleName = 'React Easy Universal';
const missingError = (param) => `${ moduleName }:: Missing required parameter: ${ param }`;

// universal({ React, app?, routes, reducers });
const universal = ({ React, app, routes, reducers }) => {
  if (!React) throw new Error(missingError('React'));
  if (!routes) throw new Error(missingError('routes'));
  if (!reducers) throw new Error(missingError('reducers'));

  // Server case. Plug in the express app.
  if (app) {
    const createHandler = require('./server').default;
    const requestHandler = createHandler({ React, app, createRoutes: routes, reducers });

    app.use('/', requestHandler);

    return app;
  }

  // Client case. Plug in browserHistory, etc...
  const createClientApp = require('./client').default;
  return createClientApp({ React, createRoutes: routes, reducers });
};

export default universal;

import { Router, Route } from 'react-router';
import { connect } from 'react-redux';
export { Router, Route, connect };
