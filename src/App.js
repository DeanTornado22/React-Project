import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import BookSearch from "./components/BookSearch";
import ResultList from "./components/ResultList";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [dataSearch, setDataSearch] = useState("");
  const [listResult, setListResult] = useState([]);

  //   useEffect(() => {
  //     if (dataSearch != "") {
  //       dataSearch.items.map((item) => (
  //           setTitle(item.volumeInfo.title),
  //           setImgSrc(item.volumeInfo.imageLinks
  //             ? item.volumeInfo.imageLinks.smallThumbnail
  //             : "")),
  //             [dataSearc];
  useEffect(() => {
    console.log("Hey");
    console.log(dataSearch);
    var listresult = [];
    if (dataSearch != "") {
      let data = dataSearch.items;
      for (let i = 0; i < data.length; i++) {
        let imgsrc =
          data[i].volumeInfo.imageLinks == undefined
            ? ""
            : data[i].volumeInfo.imageLinks.smallThumbnail;
        let title =
          data[i].volumeInfo.title == undefined ? "" : data[i].volumeInfo.title;
        let author =
          data[i].volumeInfo.authors == undefined
            ? "Not Labeled"
            : data[i].volumeInfo.authors[0];
        let publisher =
          data[i].volumeInfo.publisher == undefined
            ? ""
            : data[i].volumeInfo.publisher;
        let publishDate =
          data[i].volumeInfo.publishedDate == undefined
            ? ""
            : data[i].volumeInfo.publishedDate;
        listResult.push({
          title: title,
          imgsrc: imgsrc,
          author: author,
          publisher: publisher,
          publishDate: publishDate,
        });
      }
    }
    console.log(listResult);
    setListResult(listResult);
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
        />
      </div>
      <div className="Result">
        <ResultList listResult={listResult} />
      </div>
    </>
  );
}

export default App;
