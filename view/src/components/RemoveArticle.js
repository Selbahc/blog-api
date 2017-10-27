import React, { Component } from 'react';

class RemoveArticle extends Component {

  render() {
    return (
      <a className="text-error" href={`http://localhost:3001/${this.props.articleId}/removeArticle`}>
        <button className="btn btn-clear float-right"></button>
      </a>
    );
  }

}

export default RemoveArticle;
