import React from "react";

const Result = ({ imgsrc, title, author, publisher, publishDate }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imgsrc} />
      <p>Author: {author}</p>
      <p>Publisher: {publisher}</p>
      <p>Published: {publishDate}</p>
    </div>
  );
};

export default Result;
