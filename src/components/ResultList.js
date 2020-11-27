import React, { useEffect } from "react";
import Result from "./Result";

const ResultList = ({ listResult }) => {
  return (
    <div className="wrapper-book">
      <ul className="books">
        {listResult.map((result, ind) => (
          <Result
            imgsrc={result.imgsrc}
            title={result.title}
            author={result.author}
            publisher={result.publisher}
            publishDate={result.publishDate}
            key={ind}
          />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
