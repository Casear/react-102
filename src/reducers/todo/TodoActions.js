/**
 * # deviceActions.js
 * 
 * What platform are we running on, ie ```ios``` or ```android```
 *
 * What version is the app?
 * 
 */
'use strict';
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'

/**
 * ## Imports
 * 
 * The actions supported
 */
const {
  TODO_FETCH,
  TODO_CREATE,
  TODO_COMPLETE,
  TODO_DESTROY,
  TODO_UNDO_COMPLETE,
  TODO_UPDATE_TEXT
} = require ('../../constants/TodoConstants');


export function create(text) {
   return {
      type: TODO_CREATE,
      text: text
    };
}
function fetchToDo() {
  return fetch('http://localhost:3000/api/todos')
}
export function fetchData(todos) {
   return {
      type: TODO_FETCH,
      todos: todos
    };
}
export function fetchAsync() {
    return dispatch => {
      fetchToDo().then(
        function(response){
          return response.json();
        }
      ).then(function(data){
        
        dispatch(fetchData(data))
      })
      
    };
}
  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
export function updateText(id, text) {
    return {
      type: TODO_UPDATE_TEXT,
      id: id,
      text: text
    };
}


export function  toggleComplete(todo) {
    var id = todo.id;
    var actionType = todo.complete ? TODO_UNDO_COMPLETE : TODO_COMPLETE;

    return {
      type: actionType,
      id: id
    };
}


export function destroy(id) {
    return {
      type: TODO_DESTROY,
      id: id
    }
}
