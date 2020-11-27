import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import BookSearch from "./components/BookSearch";
import ResultList from "./components/ResultList";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [dataSearch, setDataSearch] = useState({});
  const [listResult, setListResult] = useState([]);

  useEffect(() => {
    console.log("data not json stringtify", dataSearch);
    console.log("data json stringtify", JSON.stringify(dataSearch));
    if (JSON.stringify(dataSearch) != JSON.stringify({})) {
      let books = dataSearch.items;
      books = books.map((book) => {
        let imgsrc =
          book.volumeInfo.imageLinks == undefined
            ? ""
            : book.volumeInfo.imageLinks.smallThumbnail;
        let title =
          book.volumeInfo.title == undefined ? "" : book.volumeInfo.title;
        let author =
          book.volumeInfo.authors == undefined
            ? "Not Labeled"
            : book.volumeInfo.authors[0];
        let publisher =
          book.volumeInfo.publisher == undefined
            ? ""
            : book.volumeInfo.publisher;
        let publishDate =
          book.volumeInfo.publishedDate == undefined
            ? ""
            : book.volumeInfo.publishedDate;
        return {
          imgsrc,
          title,
          author,
          publisher,
          publishDate,
        };
      });
      console.log(books);
      setListResult(books);
    }
  }, [dataSearch]);

  useEffect(() => setListResult(listResult), [listResult]);
  return (
    <>
      <div className="container">
        <h1>Book Finder</h1>
        <BookSearch
          textSearch={textSearch}
          setTextSearch={setTextSearch}
          dataSearch={dataSearch}
          setDataSearch={setDataSearch}
          listResult={listResult}
          setListResult={setListResult}
        />
      </div>
      <ResultList listResult={listResult} />
    </>
  );
}

export default App;
