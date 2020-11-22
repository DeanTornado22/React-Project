import React from "react";

class Result extends React.Component {
  render() {
    console.log("In show Result");
    return (
      <React.Fragment>
        <ul className="cities">
          <li className="city">
            <h2>{this.props.cityname}</h2>
            <div>
              {this.props.temperature}
              <sup>°C</sup>
            </div>
            <figure>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/03d.svg"
                alt="scatterd clouds"
              />
              <figcaption>{this.props.status}</figcaption>
            </figure>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Result;
