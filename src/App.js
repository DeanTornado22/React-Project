import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {JSON(this.state)}</p>
        <p>Hello 2 {this.state.a}</p>
      </div>
    );
  }
}

export default App;
