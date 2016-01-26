import { Router, Route } from '../../index';

const createHome = React => ({ title }) => <h1>{{ title }}</h1>;
const createData = React => ({ data }) => <div>{{ data }}</div>;

// It expects a factory function that it can inject dependencies into.
export default (React, browserHistory) => {

  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ createHome(React) } />
      <Route path="/data" component={ createData(React) } />
    </Router>
  );
};
