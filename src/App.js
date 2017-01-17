import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Page from './Page'
import Entry from './Entry'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={Page} path={'/page/:num'}/>
        <Route component={Entry} path={'/entry/:num'}/>
        <Route component={Entry} path={'/'}/>
      </Router>
    );
  }
}

export default App;
