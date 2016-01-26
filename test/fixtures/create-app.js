import universal from 'react-easy-universal';

import routes from './path/to/your/routes';
import reducers from './path/to/your/reducers';

const createApp = ({
  React, app
}) => universal({
  React, app, routes, reducers
});

export default createApp;
