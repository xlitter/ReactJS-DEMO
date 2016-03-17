import React from 'react';

import ReactDOM from 'react-dom';

import CommentBox from './comment/CommentBox';

function main() {
  ReactDOM.render(<CommentBox />, document.querySelector('#content'));
}

main();
