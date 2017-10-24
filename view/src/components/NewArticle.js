import React, { Component } from 'react';

class NewArticle extends Component {

  render() {
    return (
      <form action="http://localhost:3001/newArticle" method="POST">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"/>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" name="author"/>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="10" cols="70"></textarea>
        <button type="submit">Post Article</button>
      </form>
    );
  }

}

export default NewArticle;
