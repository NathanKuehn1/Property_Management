import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

import Newsletter from './components/newsletter/newsletter';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
       <Router history={history}>
          <Header>
            <Switch>
              <Route path="/signin" component={Signin}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/newsletter" component={Newsletter}></Route>
            </Switch>
          </Header>
       </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
