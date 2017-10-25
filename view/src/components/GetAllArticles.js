import React, { Component } from 'react';

import ArticleLayout from './ArticleLayout';

class GetAllArticles extends Component {

  render() {
    return (
      <div className="columns">
        {this.props.articlesList.map((article, i) =>
          (
            <div className="column col-4 my-2" key={i} onClick={() => {
              this.props.setArticleToShow(article);
              this.props.toggleShowAll();
            }}>
              <ArticleLayout article={article} />
            </div>
          )
        )}
      </div>
    );
  }

}

export default GetAllArticles;
