import React from 'react';

export default class Demo4 extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

Demo4.propTypes = {
  name: React.PropTypes.string.isRequired
};
