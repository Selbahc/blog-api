import React, { Component } from 'react';

import ArticleLayout from './ArticleLayout';
import RemoveArticle from './RemoveArticle';
import NewComment from './NewComment';
import GetComments from './GetComments';


class GetOneArticle extends Component {
  render() {
    let article = this.props.article;
    return (
      <div>
        <div className="text-center">
          <button className="btn btn-primary my-2" onClick={this.props.toggleShowAll}>Go back to all articles</button>
        </div>
        <ArticleLayout article={article} />
        <RemoveArticle articleId={article._id} />
        <GetComments comments={article.comments}/>
        <NewComment articleId={article._id} />
      </div>
    );
  }

}

export default GetOneArticle;
