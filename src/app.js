import React, { Component } from 'react';
import TodoApp from './containers/TodoApp'
import EditorApp from './containers/EditorApp'
import { Router, Route, hashHistory } from 'react-router'
export class App extends Component {
  render() {
    
    return (
      
        <Router history={hashHistory}>
            <Route path="/todo" component={TodoApp}/>
            <Route path="/editor" component={EditorApp}/>
        </Router>
    );
  }


}