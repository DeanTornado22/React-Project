import React from "react";
import ShowResult from "../Components/Result";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextSearchResult = this.handleTextSearchResult.bind(this);
    this.handleShowResult = this.handleShowResult.bind(this);
  }

  handleTextSearchResult(e) {
    this.props.onChangeTextSearch(e.target.value);
  }

  handleShowResult(e) {
    const textSearch = this.props.textSearch;
    this.props.onChangeShowResult(textSearch);
  }
  render() {
    return (
      <form>
        <input
          onChange={this.handleTextSearchResult}
          className="searchBar"
          type="text"
          placeholder="Search for a city"
        />
        <button onClick={this.handleShowResult} className="btn" type="button">
          SUBMIT
        </button>
        <span className="msg"></span>
      </form>
    );
  }
}

export default Search;
