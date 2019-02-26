import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './component/home';
import About from './component/about';
import Topics from './component/topics';
import Error from './component/error';

const Main = () => (
  <Router hashType="noslash">
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topic">Topic</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topics} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
