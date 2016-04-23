import { render } from 'react-dom';
import React, { Component } from 'react';
import TodoApp from './containers/TodoApp'
import EditorApp from './containers/EditorApp'
import App from './containers/App'
import { Router, Redirect,Route, IndexRoute,browserHistory,hashHistory } from 'react-router'
import {Provider,connect } from 'react-redux';
import '../semantic/dist/semantic.css'
import './css/style'
import '../semantic/dist/semantic.js'
import configureStore from './libs/configureStore';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

function getInitialState() {
  const _initState = {
    todo: {
        todos:{}
    },
    routing:{}
  };
  return _initState;
}
const store = configureStore(getInitialState());
const history = syncHistoryWithStore(browserHistory, store)
render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
            <Route path="todo" component={TodoApp}/>
            <Route path="editor" component={EditorApp}/>
            <Redirect from="editor/1" to="/todo" />
            <Route path="editor/:id" component={EditorApp}/>
        </Route>
      </Router>
    </Provider>
    
    , document.getElementById('root'));