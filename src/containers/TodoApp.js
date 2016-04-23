import React, { Component } from 'react';
import TodoItem from '../components/TodoItem'
import {TodoTextInput} from '../components/TodoTextInput'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../reducers/todo/TodoActions';
const actions = [
  TodoActions
];
function mapStateToProps(state) {
  return {
      ...state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch)
  };
}


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this)
        this._onSave = this._onSave.bind(this)
    }
    
    render() {
        var allTodos = this.props.todo.todos;
        var todos = [];

        for (var key in allTodos) {
          todos.push(<TodoItem key={key} data={allTodos[key]} />);
        }
        return  <div className='ui container'>
                    <h2 className="ui dividing header">To Do List</h2>
                    
                    <div className='ui action input'>
                        <TodoTextInput id='newTodo' onSave={this._onSave} />
                    </div>
                    {todos}
                </div>;
    }
    _onSave(text){
        this.props.todoActions.create(text)
    }
    _onChange() {
        this.setState(getTodoState());
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);