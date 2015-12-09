import React, { Component, PropTypes } from 'react';

class Demo10 extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1.0 };
  }
  componentDidMount() {
    let operate = -1;
    this.timer = setInterval(()=>{
      let opacity = this.state.opacity;
      opacity += 0.05 * operate;
      if (opacity < 0.1) {
        operate = 1;
      } else if (opacity > 0.9) {
        operate = -1;
      }
      this.setState({ opacity: opacity });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const opacity = this.state.opacity;
    return (
       <div style={{ opacity: opacity }}>
         Hello {this.props.name}!
       </div>
    );
  }
}

Demo10.defaultProps = {
  name: 'World'
};

Demo10.propTypes = {
  name: PropTypes.string
};

export default Demo10;
