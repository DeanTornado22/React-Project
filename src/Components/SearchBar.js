import React from "react";
import {} from "../assets/css/searchbar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input type="text" className="bar" placeholder="Enter your emoji..." />
    );
  }
}
