
'use strict';
var assign = require('object-assign');
const {
  TODO_FETCH,
  TODO_CREATE,
  TODO_COMPLETE,
  TODO_DESTROY,
  TODO_UNDO_COMPLETE,
  TODO_UPDATE_TEXT
} = require ('../../constants/TodoConstants');

const initialState = {
  todos: {}
}


export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
  case TODO_FETCH:
    console.dir(action.todos)
    return assign({},state,{todos:action.todos})
  case TODO_CREATE:
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var s = assign({},state,{})

    s.todos[id] = {
      id: id,
      complete: false,
      text: action.text
    }

    return s
    /**
     * ### set the version in the state
     *
     */
  case TODO_COMPLETE:
    var s = assign({},state,{})
    s.todos[action.id].complete = true;
    return s
  case TODO_DESTROY:
    var s = assign({},state,{})
    delete s.todos[action.id];
    return s
  case TODO_UNDO_COMPLETE:
    var s = assign({},state,{})
    s.todos[action.id].complete = false;
    return s
  case TODO_UPDATE_TEXT:
    var s = assign({},state,{})
    s.todos[action.id].text = action.text;
    return s
  }

  return state;
}
