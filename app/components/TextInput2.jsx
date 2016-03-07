import React, { Component } from 'react';

class TextInput2 extends Component {

  constructor() {
    super();
    this.state = { value: '' };
    this.change = this.change.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.value) {
      this.setState({ value: nextProps.data });
    }
  }

  change(e) {
    const newVal = e.target.value;
    this.setState({ value: newVal });
    this.props.update(newVal);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={ this.change } />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

TextInput2.propTypes = {
  data: React.PropTypes.string,
  update: React.PropTypes.function
};

export default TextInput2;
