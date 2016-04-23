import React, { Component } from 'react';
import { Link } from 'react-router'
class App extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return  <div className='ui container'>
                    <h2 className="ui dividing header">APP</h2>
                    <div>
                        <Link to="/todo" activeStyle={{ color: 'red' }}>ToDoList</Link> 
                        <Link to="/editor" activeStyle={{ color: 'red' }}>Editor</Link>
                    </div>
                     {this.props.children}

                </div>;
    }
    
}

module.exports = App