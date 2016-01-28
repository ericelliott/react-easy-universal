import { Router, Route } from 'react-router';

// It expects a factory function that it can inject dependencies into.
export default (React, browserHistory) => {
  const Home = () => <h1>hello, world</h1>;
  const Data = () => <div>Some junk goes here.</div>;

  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Home } />
      <Route path="/data" component={ Data } />
    </Router>
  );
};
