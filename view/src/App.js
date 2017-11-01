import React, { Component } from 'react';
import request from 'request';

import 'spectre.css/dist/spectre.min.css';
import './App.css';

import { Header }  from './components/Header';
import AddEditArticle from './components/AddEditArticle';
import DisplayAllArticles from './components/DisplayAllArticles';
import DisplayOneArticle from './components/DisplayOneArticle';


class App extends Component {
  state = {
    displayedArticle: {},
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
      if (err) throw err;
      this.setState({
        articlesList: JSON.parse(body)
      });
    })
  }

  setArticleToShow = (article) => {
    this.setState({displayedArticle: article})
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
            <AddEditArticle toggleNewArticle={this.toggleNewArticle}/>
            <DisplayAllArticles
              articlesList={this.state.articlesList}
              toggleShowAll={this.toggleShowAll}
              setArticleToShow={this.setArticleToShow}/>
          </div>
        }

        {!this.state.showAllArticles &&
          <DisplayOneArticle
            toggleNewArticle={this.toggleNewArticle}
            toggleShowAll={this.toggleShowAll}
            article={this.state.displayedArticle} />
        }
      </div>
    );
  }
}

export default App;
