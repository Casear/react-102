import React, { Component } from 'react';
import TodoApp from './containers/TodoApp'
export class App extends Component {
  render() {
    
    return (
      <div className='ui container'>
        <TodoApp />
      </div>
    );
  }


}