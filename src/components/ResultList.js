import React, { useEffect } from "react";
import Result from "./Result";

const ResultList = ({ listResult }) => {
  return (
    <div className="wrapper-book">
      <ul className="books">
        {listResult.map(
          (result) => (
            console.log(result),
            (
              <Result
                imgsrc={result.image}
                title={result.title}
                contactCity={result.contactCity}
                contactName={result.contactName}
                contactUrl={result.contactUrl}
                summary={result.summary}
                key={result.ind}
              />
            )
          )
        )}
      </ul>
    </div>
  );
};

export default ResultList;
