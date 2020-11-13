import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Header } from "./Components/Header.js";
import { SearchBar } from "./Components/SearchBar.js";
import { Emoji } from "./Components/Emoji.js";
import { emojiList } from "./Sources/emojiList.js";

function App() {
  let eList = [];
  for (let i = 0; i < 20; i++) {
    eList.push(
      <Emoji title={emojiList[i].title} symbol={emojiList[i].symbol} />
    );
  }
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      {eList}
    </React.Fragment>
  );
}

export default App;
