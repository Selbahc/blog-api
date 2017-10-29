import React, { Component } from 'react';
import request from 'request';

class NewArticle extends Component {
  state = {
    modalActive: false,
    editing: false,
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

  handleSubmit = (e, url) => {
    e.preventDefault();

    request.post({
      url,
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
        this.props.toggleNewArticle();
        if (this.state.editing === false) {
          setTimeout(() => {
            this.setState({saved: ''});
            this.props.toggleNewArticle();
          }, 4000);
        } else {
          setTimeout(() => {
            this.setState({
              saved : '',
              editing: false
            });
            this.props.toggleShowAll();
          }, 4000);
        }

      });
  }

  //EDIT ARTICLE
  componentDidMount() {
    if (this.props.article !== undefined)
      return this.setState({
        editing: true,
        title: this.props.article.title,
        author: this.props.article.author,
        content: this.props.article.content
      })
  }

  render() {
    return (
      <div className="text-center my-2">
        {!this.state.modalActive &&
          this.state.saved === '' &&
          this.state.editing === false &&
          <button onClick={this.toggleModal} className="btn btn-primary">Write New Article</button>
        }

        {/* // EDIT ARTICLE */}
        {!this.state.modalActive &&
          this.state.saved === '' &&
          this.state.editing === true &&
          <button onClick={this.toggleModal} className="btn btn-primary">Edit Article</button>
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
                  <form className="form-group">
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
                {!this.state.editing &&
                  <input className="btn my-2"
                    type="submit"
                    value="Post Your Article"
                    onClick={(e) => this.handleSubmit(e, 'http://localhost:3001/newArticle')}/>
                }

                {/* // EDIT ARTICLE */}
                {this.state.editing &&
                  <input className="btn my-2"
                    type="submit"
                    value="Update Your Article"
                    onClick={(e) => this.handleSubmit(e, `http://localhost:3001/${this.props.article._id}/editArticle`)}/>
                }
              </div>
            </div>
          </div>
        }
      </div>
    );
  }

}

export default NewArticle;
