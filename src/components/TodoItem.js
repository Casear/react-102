import React, { Component } from 'react';
import {TodoTextInput} from './TodoTextInput'
import  TodoActions from '../actions/TodoActions'
export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
    this._onDoubleClick = this._onDoubleClick.bind(this)
    this._onToggleComplete = this._onToggleComplete.bind(this)
    this._onDestroy = this._onDestroy.bind(this)
    this._onSave = this._onSave.bind(this)
  }
  render() {
    if(this.props.todo.complete){
        var check = 
            <button className="ui icon button">
                <i className="green heart icon" onClick={this._onToggleComplete} ></i>
            </button>
    }else{
        var check = 
            <button className="ui icon button">
                <i className="red heart icon" onClick={this._onToggleComplete} ></i>
            </button>
    }
    if (this.state.isEditing) {
      var input =
        <button className="ui icon button">
            <TodoTextInput id={this.props.todo.id} onSave={this._onSave}
              value={this.props.todo.text}
            />
        </button>
        
    }else{
      var input = 
        <button className="ui labeled icon button" onDoubleClick={this._onDoubleClick}>
            {this.props.todo.text}
        </button>
        
    }

    return (
      <div key={this.props.todo.id}>
        <div className='ui action input'>
            {check}
            {input}
            <div className="ui primary button visible" onClick={this._onDestroy}>刪除</div>
        </div>
      </div>
    );
  }
  _onSave(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  }
  _onDestroy() {
    TodoActions.destroy(this.props.todo.id);
  }
  _onToggleComplete() {
    TodoActions.toggleComplete(this.props.todo);
  }
  _onDoubleClick() {
    this.setState({isEditing: true});
  }
}