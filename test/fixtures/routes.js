import { Router, Route } from 'react-easy-universal';

import createHome from 'shared/components/home';
import createTestData from 'shared/components/test-data';

// It expects a factory function that it can inject dependencies into.
export default (React, browserHistory) => {

  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ createHome(React) } />
      <Route path="/test-data" component={ createTestData(React) } />
    </Router>
  );
};
