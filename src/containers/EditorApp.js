import React, { Component } from 'react';
import { Link } from 'react-router'
class EditorApp extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return  <div className='ui container'>
                    <h2 className="ui dividing header">Editor</h2>
                    {this.props.params.id}       
                </div>;
    }
    
}

module.exports = EditorApp