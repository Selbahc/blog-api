import React, { Component } from 'react';
import 'spectre.css/dist/spectre.min.css';
import './App.css';

import NewArticle from './components/NewArticle';
import GetAllArticles from './components/GetAllArticles';
import GetOneArticle from './components/GetOneArticle';


class App extends Component {
  state = {
    id: ''
  }

  setClickId = (id) => {
    this.setState({id})
  }

  render() {
    return (
      <div className="App">
        {this.state.id === '' &&
          <div>
            <GetAllArticles setClickId={this.setClickId}/>
            <NewArticle />
          </div>
        }
        {this.state.id !== '' &&
          <GetOneArticle articleId={this.state.id} />
        }
      </div>
    );
  }
}

export default App;
