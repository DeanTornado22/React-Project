import React from "react";

const Result = ({ imgsrc, title, author, publisher, publishDate }) => {
  return (
    <div className="book">
      <div className="book__title">
        <h3>{title}</h3>
      </div>
      <div className="book__img-block">
        <img src={imgsrc} className="book__img" />
      </div>
      <div className="book__desc">
        <div className="book__field">
          <strong>Author:</strong>
          {author}
        </div>
        <div className="book__field">
          <strong>Publisher: </strong>
          {publisher}
        </div>
        <div className="book__field">
          <strong>Published: </strong>
          {publishDate}
        </div>
      </div>
    </div>
  );
};

export default Result;
