import React, { Component } from 'react';

class Demo7 extends Component {

  handleClick() {
    this.refs.myTextInput.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
      </div>
    );
  }

}


/* const Demo7 = React.createClass({

  handleClick() {
    this.refs.myTextInput.focus();
  },

  render() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }

});*/

export default Demo7;
