import React, { Component } from 'react';
import marked from 'marked';

export default class Comment extends Component {
  rawMarked() {
    const content = marked(this.props.children.toString(), { sanitize: true });
    return { __html: content };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <div dangerouslySetInnerHTML={this.rawMarked() }></div>
      </div>
    );
  }
}
