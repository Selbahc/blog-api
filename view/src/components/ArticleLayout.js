import React, { Component } from 'react';
import RemoveArticle from './RemoveArticle';

class ArticleLayout extends Component {

  render() {
    const article = this.props.article
    return (
      <div className="card">

        <div className="card-header">
          {this.props.removable &&
            <RemoveArticle articleId={article._id}/>
          }

          <div className="card-title h5">{article.title}</div>
          <div className="card-subtitle text-gray">By {article.author}</div>
        </div>

        <div className="card-body">{article.content}</div>
        
        <div className="card-footer text-gray"><i>Published on {article.date}</i></div>
      </div>
    );
  }

}

export default ArticleLayout;
