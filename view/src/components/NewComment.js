import React, { Component } from 'react';
import request from 'request';

class NewComment extends Component {
  state = {
    title: '',
    author: '',
    message: '',
    saved: ''
  }

  getInputValue = (e) => {
    let formKey = e.target.name;
    let value = e.target.value;

    this.setState({
      [formKey] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    request.post({
      url: `http://localhost:3001/${this.props.articleId}/newComment`,
      form: {
        title: this.state.title,
        author: this.state.author,
        message: this.state.message
      }},
      (err, httpResponse, body) => {
        this.setState({
          title: '',
          author: '',
          message: '',
          saved: JSON.parse(body).saved
        });
        setTimeout(() => this.setState({saved: ''}), 4000);
      });
  }

  render() {
    return (
      <div>
        {this.state.saved !== '' &&
          <div className="toast toast-success">
            {this.state.saved}
          </div>
        }

        {this.state.saved === '' &&
          <div>
            <h3>Add a new comment</h3>
            <form className="form-group col-4"
              onSubmit={this.handleSubmit}>

              <input className="form-input my-1"
                id="author"
                type="text"
                name="author"
                onChange={this.getInputValue}
                value={this.state.author}
              placeholder="Your Name"/>

              <input className="form-input my-1"
                id="title"
                type="text"
                name="title"
                onChange={this.getInputValue}
                value={this.state.title}
              placeholder="Title"/>

              <textarea className="form-input my-1"
                id="message"
                name="message"
                rows="3"
                onChange={this.getInputValue}
                value={this.state.message}
              placeholder="Your comment">
              </textarea>

              <input className="btn my-2" type="submit" value="Post Comment"/>
            </form>
          </div>
        }
      </div>
    );
  }

}

export default NewComment;
