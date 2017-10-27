import React, { Component } from 'react';
import request from 'request';
import 'spectre.css/dist/spectre.min.css';
import './App.css';

import Header from './components/Header';
import NewArticle from './components/NewArticle';
import GetAllArticles from './components/GetAllArticles';
import GetOneArticle from './components/GetOneArticle';


class App extends Component {
  state = {
    article: {},
    articlesList: [],
    showAllArticles: true
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate () {
    this.fetchArticles();
  }

  fetchArticles = () => {
    request('http://localhost:3001/details', (err, res, body) => {
      this.setState({
        articlesList: JSON.parse(body)
      });
    })
  }

  setArticleToShow = (article) => {
    this.setState({article})
  }

  toggleShowAll = () => {
    this.state.showAllArticles === true ?
      this.setState({showAllArticles: false})
    : this.setState({showAllArticles: true});
  }

  render() {
    return (
      <div className="App container">
        <Header />

        {this.state.showAllArticles &&
          <div>
            <NewArticle />
            <GetAllArticles articlesList={this.state.articlesList}
              toggleShowAll={this.toggleShowAll}
              setArticleToShow={this.setArticleToShow}/>
          </div>
        }

        {!this.state.showAllArticles &&
          <GetOneArticle toggleShowAll={this.toggleShowAll}
            article={this.state.article} />
        }
      </div>
    );
  }
}

export default App;
