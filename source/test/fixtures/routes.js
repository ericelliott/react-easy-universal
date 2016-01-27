import { Router, Route } from '../../index';
// It expects a factory function that it can inject dependencies into.
export default (React, browserHistory) => {
  const Home = ({ title }) => <h1>{{ title }}</h1>;
  const Data = ({ data }) => <div>{{ data }}</div>;

  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Home } />
      <Route path="/data" component={ Data } />
    </Router>
  );
};
