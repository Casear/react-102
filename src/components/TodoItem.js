'use strict';
import React, { Component } from 'react';
import {TodoTextInput} from './TodoTextInput'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../reducers/todo/TodoActions';
function mapStateToProps(state) {
  return {
      ...state
  }
};


function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch)
  };
}
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
    this._onDoubleClick = this._onDoubleClick.bind(this)
    this._onToggleComplete = this._onToggleComplete.bind(this)
    this._onDestroy = this._onDestroy.bind(this)
    this._onSave = this._onSave.bind(this)
  }
  render() {
    if(this.props.data.complete){
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
            <TodoTextInput id={this.props.data.id} onSave={this._onSave}
              value={this.props.data.text}
            />
        </button>
        
    }else{
      var input = 
        <button className="ui labeled icon button" onDoubleClick={this._onDoubleClick}>
            {this.props.data.text}
        </button>
        
    }

    return (
      <div key={this.props.data.id}>
        <div className='ui action input'>
            {check}
            {input}
            <div className="ui primary button visible" onClick={this._onDestroy}>刪除</div>
        </div>
      </div>
    );
  }
  _onSave(text) {
    
    this.props.todoActions.updateText(this.props.data.id, text);
    this.setState({isEditing: false});
  }
  _onDestroy() {
    this.props.todoActions.destroy(this.props.data.id);
    
  }
  _onToggleComplete() {
    this.props.todoActions.toggleComplete(this.props.data);
    
  }
  _onDoubleClick() {
    this.setState({isEditing: true});
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);