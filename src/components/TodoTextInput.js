import React, { Component } from 'react';


var ENTER_KEY_CODE = 13;
export class TodoTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {value: props.value || ''};
    this._onChange = this._onChange.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)
    this._save = this._save.bind(this)
  }

  render() {
    return (
      <input
        key={this.props.id}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  
  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

};

