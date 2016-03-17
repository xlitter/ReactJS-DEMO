import React, { Component } from 'react';

class Demo8 extends Component {
  constructor(props) {
    super(props);
    this.state = { linked: false };
  }

  handleClick() {
    this.setState({ linked: !this.state.linked });
  }

  render() {
    const text = this.state.linked ? 'liked' : 'haven\'t liked';
    return (
      <p onClick={()=>{this.handleClick();}}>
        You {text} this.Click to toggle.
      </p>
    );
  }
}

export default Demo8;
