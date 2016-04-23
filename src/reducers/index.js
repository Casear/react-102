'use strict';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import todo from './todo/TodoReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo:todo,
    routing: routerReducer
});

export default rootReducer;