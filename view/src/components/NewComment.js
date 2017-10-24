import React, { Component } from 'react';

class NewComment extends Component {

  render() {
    return (
      <form action={`http://localhost:3001/${this.props.articleId}/newComment`} method="POST">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"/>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" name="author"/>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" cols="50"></textarea>
        <button type="submit">Post Comment</button>
      </form>
    );
  }

}

export default NewComment;
