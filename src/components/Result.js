import React from "react";

const Result = ({
  imgsrc,
  title,
  contactCity,
  contactName,
  contactUrl,
  summary,
}) => {
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
          <strong>Contact Name:</strong>
          {contactName}
        </div>
        <div className="book__field">
          <strong>Contact City: </strong>
          {contactCity}
        </div>
        <div className="book__field">
          <strong>Contact Url: </strong>
          {contactUrl}
        </div>
        <div className="book__field">
          <strong>Summary: </strong>
          {summary}
        </div>
      </div>
    </div>
  );
};

export default Result;
