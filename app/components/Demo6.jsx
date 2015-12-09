import React from 'react';

export default class Demo6 extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

Demo6.defaultProps = {
  title: 'Hello World Demo6'
};

Demo6.propTypes = {
  title: React.PropTypes.string.isRequired
};
