import React, { useEffect } from "react";
import Result from "../components/Result";

const ResultList = ({ listResult }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {listResult.map((result, ind) => (
          <Result {...result} key={ind} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
