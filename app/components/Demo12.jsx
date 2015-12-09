import React, { Component, PropTypes} from 'react';

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
    this.props.promise.then((data)=>{
      return {
        data: data
      };
    }, (err)=>{
      return {
        error: err
      };
    }).then((data)=>{
      data.loading = false;
      this.setState(data);
    });
  }

  render() {
    const state = this.state;
    let html = <span></span>;

    if (state.loading) {
      html = <span>loading...</span>;
    } else if (state.error !== null) {
      html = <span>Error: {this.state.error.message}</span>;
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
                    <br/>
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
  promise: () => {
    console.log(arguments);
  }
};

export default Demo12;
