import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ResultList from "./components/ResultList";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [listResult, setListResult] = useState([]);

  return (
    <>
      <div className="main-container">
        <Header
          textSearch={textSearch}
          setTextSearch={setTextSearch}
          listResult={listResult}
          setListResult={setListResult}
        />
        <ResultList listResult={listResult} setListResult={setListResult} />
      </div>
    </>
  );
}

export default App;
