import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

class Demo11 extends Component {

  constructor() {
    super();
    this.isMount = false;
    this.state = {
      userName: '',
      lastGistUrl: ''
    };
  }

  componentDidMount() {
    const source = this.props.source;
    this.queryGists(source).then((data)=>{
      const lastGist = data[0];
      this.setState({
        userName: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    });
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  queryGists(source) {
    return $.get(source);
  }

  render() {
    if (this.isMount) {
      const state = this.state;
      const userName = state.userName;
      const lastGistUrl = state.lastGistUrl;
      return (
        <div>
          <h1>Demo11</h1>
          {userName}'s last gist is
          <a href={lastGistUrl}>here</a>
        </div>
      );
    }

    return <div></div>;
  }

}

Demo11.propTypes = {
  source: PropTypes.string
};

export default Demo11;
