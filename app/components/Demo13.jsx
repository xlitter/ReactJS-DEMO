import React, { Component } from 'react';
import TextInput from './TextInput';

/*
  Parent Component 设置 Child Component内部的值
*/
class Demo13 extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  getTextInputRef(c) {
    this.textInput = c;
  }

  handleClick() {
    const textInput = this.textInput;
    const input = textInput.refs.myInput;
    input.value = 'This is value from Demo13';
    textInput.setState({ value: input.value });
  }

  render() {
    return (
      <div>
        <TextInput ref={this.getTextInputRef.bind(this)} />
        <button onClick={this.handleClick}>set some text</button>
      </div>
    );
  }
}

export default Demo13;
