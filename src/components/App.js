/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Bundle from './bundle.js';
import loadHome from 'bundle-loader?lazy!./home-page.js';
import loadSecond from 'bundle-loader?lazy!./second-page.js';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const Second = () => {
  return (
    <Bundle load={loadSecond}>
      {(Second) => <Second />}
    </Bundle>
  )
}

const Home = () => {
  return (
    <Bundle load={loadHome}>
      {(Home) => <Home />}
    </Bundle>
  )
}

class App extends React.Component {
	componentDidMount() {
    // preloads the rest
    loadHome(() => {})
    loadSecond(() => {})
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/second" component={Second} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
