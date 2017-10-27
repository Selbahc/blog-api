import React, { Component } from 'react';
import request from 'request';

class NewArticle extends Component {
  state = {
    modalActive: false,
    title: '',
    author: '',
    content: '',
    saved: ''
  }

  toggleModal = () => {
    !this.state.modalActive ?
      this.setState({modalActive: true}) : this.setState({modalActive: false});
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
      url: 'http://localhost:3001/newArticle',
      form: {
        title: this.state.title,
        author: this.state.author,
        content: this.state.content
      }},
      (err, httpResponse, body) => {
        this.toggleModal();
        this.setState({
          title: '',
          author: '',
          content: '',
          saved: JSON.parse(body).saved
        });
        setTimeout(() => this.setState({saved: ''}), 4000);
      });
  }

  render() {
    return (
      <div className="text-center my-2">
        {!this.state.modalActive && this.state.saved === '' &&
          <button onClick={this.toggleModal} className="btn btn-primary">Write New Article</button>
        }

        {this.state.saved !== '' &&
          <div className="toast toast-success">
            {this.state.saved}
          </div>
        }

        {this.state.modalActive &&
          <div className="modal active">
            <div className="modal-overlay"></div>
            <div className="modal-container">
              <div className="modal-header">
                <div className="text-error"><button
                  className="btn btn-clear float-right"
                  onClick={this.toggleModal}></button>
                </div>
                <div className="modal-title h5">Post New Article</div>
              </div>
              <div className="modal-body">
                <div className="content">
                  <form className="form-group"
                  action="http://localhost:3001/newArticle" method="POST">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-input" id="title" type="text" name="title" onChange={this.getInputValue}
                      value={this.state.title}/>
                    <label className="form-label" htmlFor="author">Author</label>
                    <input className="form-input" id="author" type="text" name="author" onChange={this.getInputValue}
                      value={this.state.author}/>
                    <label className="form-label" htmlFor="content">Content</label>
                    <textarea className="form-input" id="content" name="content" rows="9" onChange={this.getInputValue}
                      value={this.state.content}></textarea>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <input className="btn my-2"
                  type="submit"
                  value="Post Your Article"
                  onClick={this.handleSubmit}/>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }

}

export default NewArticle;
