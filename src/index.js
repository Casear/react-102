import React from 'react';
import { render } from 'react-dom';

import '../semantic/dist/semantic.css'
import './css/style'
import '../semantic/dist/semantic.js'
import TodoApp from './containers/TodoApp'
import EditorApp from './containers/EditorApp'
import App from './containers/App'
import { Router, Redirect,Route, IndexRoute,browserHistory,hashHistory } from 'react-router'
render(
    <Router history={browserHistory}>
        <IndexRoute component={App}/>
        <Route path="/" component={App}>
            <Route path="todo" component={TodoApp}/>
            <Route path="editor" component={EditorApp}/>
            <Redirect from="editor/1" to="/todo" />
            <Route path="editor/:id" component={EditorApp}/>
        </Route>
    </Router>
    , document.getElementById('root'));