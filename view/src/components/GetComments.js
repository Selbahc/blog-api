import React, { Component } from 'react';

// import request from 'request';

class GetComments extends Component {

    // request(`http://localhost:3001/${this.props.articleId}`, (err, res, body) => {
    //   console.log("OK");
    // });


  render() {
    return (
      <div>
        {this.props.comments &&
          this.props.comments.map((comment, i) =>
            (<blockquote className="col-4" key={i}>
              <a className="text-error" href={`http://localhost:3001/${comment._id}/removeComment`}>
                <button className="btn btn-clear float-right"></button>
              </a>

              <p><b>{comment.title}</b></p>

              <p>{comment.message}</p>

              <cite>- {comment.author} on {comment.date} </cite>

            </blockquote>)
          )}
      </div>
    );
  }

}

export default GetComments;
