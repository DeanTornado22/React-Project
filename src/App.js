import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Dean Tornado" };
    this.state.a = "Yo what up!";
  }
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
