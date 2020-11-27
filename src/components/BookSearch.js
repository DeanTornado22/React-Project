import React from "react";
import ResultList from "./ResultList";

const BookSearch = ({
  textSearch,
  setTextSearch,
  dataSearch,
  setDataSearch,
}) => {
  const textHandler = (e) => {
    console.log(e.target.value);
    setTextSearch(e.target.value);
  };
  const submitHandler = (e) => {
    let result = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${textSearch}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSearch(data);
      });
  };
  return (
    <div className="search-container">
      <input
        onChange={textHandler}
        type="text"
        placeholder="Type author, book name, subject"
      />
      <button onClick={submitHandler} type="submit"></button>
    </div>
  );
};

export default BookSearch;
