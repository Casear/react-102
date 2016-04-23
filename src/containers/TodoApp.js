import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions'
import {TodoItem} from '../components/TodoItem'
import {TodoTextInput} from '../components/TodoTextInput'
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = getTodoState()
        this._onChange = this._onChange.bind(this)
        this._onSave = this._onSave.bind(this)
    }
    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }
    render() {
        var allTodos = this.state.allTodos;
        var todos = [];

        for (var key in allTodos) {
          todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        }
        return  <div>
                    <h2 class="ui dividing header">To Do List</h2>
                    <div className='ui action input'>
                        <TodoTextInput id='newTodo' onSave={this._onSave} />
                    </div>
                    {todos}
                </div>;
    }
    _onSave(text){
        TodoActions.create(text);
    }
    _onChange() {
        this.setState(getTodoState());
    }
}

module.exports = TodoApp