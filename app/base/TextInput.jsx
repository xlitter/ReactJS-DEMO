import React, { Component } from 'react';

class TextInput extends Component {

  constructor() {
    super();// super() 不可或缺, 否则this 为undefined
    this.state = { value: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const state = this.state;
    return (
      <div>
        <input type="text" ref="myInput" onChange ={this.handleInput} />
        <p>{ state.value }</p>
      </div>
    );
  }

}

export default TextInput;
