import React, { Component } from 'react';

class ArticleLayout extends Component {

  render() {
    const article = this.props.article
    return (
      <div>

        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <p>
          <span>By {article.author} </span>
          ---
          <span> on {article.date}</span>
        </p>
        <a href={`http://localhost:3001/${article._id}/removeArticle`}>Remove Article</a>

        {/* <GetComments comments={this.state.article.comments}/> */}

        {/* <NewComment articleId={this.state.article._id} /> */}

        {/* <a href="http://localhost:3000/">Go back to all articles</a> */}
      </div>
    );
  }

}

export default ArticleLayout;
