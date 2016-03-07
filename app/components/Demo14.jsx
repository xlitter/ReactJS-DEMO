import React, { Component } from 'react';
import TextInput from './TextInput2';


class Demo14 extends Component {

  constructor() {
    super();
    this.state = { inputValue: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ inputValue: 'This is value from Demo14' });
  }

  render() {
    return (
      <div>
       <TextInput data={this.state.inputValue} />
        <button onClick={this.handleClick}>demo14 click</button>
      </div>

    );
  }

}

export default Demo14;
