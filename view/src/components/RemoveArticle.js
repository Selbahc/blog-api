import React, { Component } from 'react';

class RemoveArticle extends Component {

  render() {
    return (
      <a className="btn btn-link" href={`http://localhost:3001/${this.props.articleId}/removeArticle`}>Remove Article</a>
    );
  }

}

export default RemoveArticle;
