import React, { Component } from 'react';
import request from 'request';

class GetAllArticles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    request('http://localhost:3001/', (err, res, body) => {
      this.setState({
        articles: JSON.parse(body)
      });
    })
  }

  keepId = (id) => {
    this.props.setClickId(id)
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article, i) =>
          (<div key={i}>

            <h1 onClick={
              () => this.keepId(article._id)
            }>{article.title}</h1>
            <p>{article.content}</p>
            <p>
              <span>By {article.author} </span>
              ---
              <span> on {article.date}</span>
            </p>

          </div>)
        )}
      </div>
    );
  }

}

export default GetAllArticles;
