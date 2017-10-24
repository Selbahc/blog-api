import React, { Component } from 'react';

class GetComments extends Component {

  render() {
    return (
      <div>
        {this.props.comments &&
          this.props.comments.map((comment, i) =>
            (<div key={i}>
              <h2>{comment.title}</h2>
              <p>{comment.message}</p>
              <p>
                <span>{comment.author} </span>
                ---
                <span> {comment.date}</span>
              </p>
              <a href={`http://localhost:3001/${comment._id}/removeComment`}>Delete comment</a>
            </div>)
          )}
      </div>
    );
  }

}

export default GetComments;
