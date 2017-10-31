import React from 'react';

export const RemoveArticle = (props) => {
  return (
    <a className="text-error" href={`http://localhost:3001/${props.articleId}/removeArticle`}>
      <button className="btn btn-clear float-right"></button>
    </a>
  );
}
