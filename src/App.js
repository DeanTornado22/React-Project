import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Result from "./Components/Result";

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textSearch: "", cities: [], message: "" };
    this.changeHandler = this.changeHandler.bind(this);
    this.changeShowResult = this.changeShowResult.bind(this);
  }

  searchCity(cityName) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    ).then((res) => res.json());
  }

  changeHandler(textSearch) {
    this.setState({ textSearch: textSearch });
    console.log(this.state.textSearch);
  }

  changeShowResult(showResult) {
    this.searchCity(showResult).then((data) => {
      if (data.cod === "404") {
        this.setState({ message: "Please search for a valid city 😩" });
      } else {
        let cities = this.state.cities;
        cities.push({
          cityname: data.name,
          temperature: data.main.temp_max,
          status: data.weather[0].description.toUpperCase(),
        });
        this.setState({ cities: cities });
      }
    });
    console.log("Show Result click in Search", showResult);
  }

  render() {
    const showResult = this.state.showResult;
    return (
      <React.Fragment>
        <Header />
        <Search
          textSearch={this.state.textSearch}
          onChangeTextSearch={this.changeHandler}
          onChangeShowResult={this.changeShowResult}
        />
        {this.state.cities.map((city, index) => (
          <Result {...city} key={index} />
        ))}
      </React.Fragment>
    );
  }
}
export default App;
