import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comment</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

