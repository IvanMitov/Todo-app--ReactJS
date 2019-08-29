import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory as history } from 'history';

import Header from 'components/header/header'
import Home from 'container/Todos'
import About from 'container/About'
import NotFound from 'container/NotFound.js'

import './App.scss'

class App extends Component {
  render() {
    return (
        <Router history={history()}>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
    );
  }
}

export default App