import React from 'react';

export default class Demo5 extends React.Component {
  render() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, child=>{
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
}

Demo5.propTypes = {
  children: React.PropTypes.array
};
