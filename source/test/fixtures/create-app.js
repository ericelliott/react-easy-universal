import universal from '../../index';

import routes from './routes';
import reducers from './reducers';

const createApp = ({
  React, app
}) => universal({
  React, app, routes, reducers
});

export default createApp;
