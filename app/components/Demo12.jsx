import React, { Component } from 'react';

class Demo12 extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      data: null,
      error: null
    };
  }

  componentDidMount() {
    this.props.promise.then((data) => ({
      data
    }), (err) => ({
      error: err
    })).then((data) => {
      this.setState({ data: data.data, loading: false, error: data.error });
    });
  }

  render() {
    const state = this.state;
    let html = <span></span>;

    if (state.loading) {
      html = <span>loading...</span>;
    } else if (state.error !== null && state.error !== undefined) {
      html = <span>Error: {state.error.message}</span>;
    } else {
      const items = state.data.items;
      html = (
        <main>
          <h1>MOst Popular JavaScript Projects in GitHub</h1>
          <ol>
            {
              items.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={item.html_url}>{item.name}</a>
                    ({item.stargazers_count } stars)
                    <br />
                    { item.description }
                  </li>
                );
              })
            }
          </ol>
        </main>
      );
    }

    return html;
  }

}

Demo12.propTypes = {
  promise: (props, propName, componentName) => {
    console.log(`props ${props}, propName: ${propName}, componentName: ${componentName}`);
  }
};

export default Demo12;
