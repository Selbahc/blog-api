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
    showAllArticles: true,
    newArticle: false
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.newArticle !== this.state.newArticle
      && this.state.newArticle === true) {
        this.fetchArticles();
      }
  }

  fetchArticles = () => {
    request('http://localhost:3001/', (err, res, body) => {
      this.setState({
        articlesList: JSON.parse(body)
      });
    })
  }

  setArticleToShow = (article) => {
    this.setState({article})
  }

  toggleNewArticle = () => {
    this.state.newArticle === false ?
      this.setState({newArticle: true})
      : this.setState({newArticle: false});
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
            <NewArticle toggleNewArticle={this.toggleNewArticle}/>
            <GetAllArticles articlesList={this.state.articlesList}
              toggleShowAll={this.toggleShowAll}
              setArticleToShow={this.setArticleToShow}/>
          </div>
        }

        {!this.state.showAllArticles &&
          <GetOneArticle toggleNewArticle={this.toggleNewArticle}
            toggleShowAll={this.toggleShowAll}
            article={this.state.article} />
        }
      </div>
    );
  }
}

export default App;
