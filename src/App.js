import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ShowFood from "./components/ShowFood";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState("false");
  useEffect(() => {
    console.log(searchResult.strCategory);
  }, [searchResult]);
  return (
    <div>
      <Header searchResult={searchResult} setSearchResult={setSearchResult} />
      <div>
        <ShowFood searchResult={searchResult} />
      </div>
    </div>
  );
}

export default App;
