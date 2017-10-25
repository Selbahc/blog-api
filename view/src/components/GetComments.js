import React, { Component } from 'react';

class GetComments extends Component {

  render() {
    return (
      <div>
        {this.props.comments &&
          this.props.comments.map((comment, i) =>
            (<blockquote key={i}>
              <p><b>{comment.title}</b></p>
              <p>{comment.message}</p>
              <cite>- {comment.author} on {comment.date} </cite>
              <a className="btn btn-sm" href={`http://localhost:3001/${comment._id}/removeComment`}>Delete comment</a>
            </blockquote>)
          )}
      </div>
    );
  }

}

export default GetComments;
