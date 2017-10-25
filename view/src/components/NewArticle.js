import React, { Component } from 'react';

class NewArticle extends Component {
  state = {
    modalActive: false
  }

  toggleModal = () => {
    !this.state.modalActive ?
      this.setState({modalActive: true}) : this.setState({modalActive: false});
  }

  render() {
    return (
      <div className="text-center my-2">
        {!this.state.modalActive &&
          <button onClick={this.toggleModal} className="btn btn-primary">Write New Article</button>
        }
        {this.state.modalActive &&
          <div className="modal active">
            <div className="modal-overlay"></div>
            <div className="modal-container">
              <div className="modal-header">
                <button className="btn btn-clear float-right" onClick={this.toggleModal}></button>
                <div className="modal-title h5">Post New Article</div>
              </div>
              <div className="modal-body">
                <div className="content">
                  <form className="form-group"
                  action="http://localhost:3001/newArticle" method="POST">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-input" id="title" type="text" name="title"/>
                    <label className="form-label" htmlFor="author">Author</label>
                    <input className="form-input" id="author" type="text" name="author"/>
                    <label className="form-label" htmlFor="content">Content</label>
                    <textarea className="form-input" id="content" name="content" rows="10" cols="70"></textarea>
                    <button className="btn my-2" type="submit">Post Article</button>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                ...
              </div>
            </div>
          </div>
        }
      </div>
    );
  }

}

export default NewArticle;
