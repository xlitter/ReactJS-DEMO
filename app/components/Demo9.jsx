import React, { Component } from 'react';

class Demo9 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Hello' };
  }

  handleChange(/* e*/) {
    // this.setState({ value: e.target.value });
    this.setState({ value: this.refs.input.value });
  }

  render() {
    const value = this.state.value;
    return (
      <div>
        <input type="text" value={ value } ref="input" onChange={(e)=>{ this.handleChange(e); }} />
        <p>{ value }</p>
      </div>
    );
  }
}

export default Demo9;
