import React from "react";
import "../assets/css/Header.css";

const Header = ({ searchResult, setSearchResult }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let result = fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        let meals = data.meals[0];
        setSearchResult(meals);
      });
  };
  return (
    <div className="container">
      <h3> Feeling Hungry?</h3>
      <h5> Get a random meal by clicking below</h5>
      <button onClick={submitHandler} className="buttonMeal">
        Get Meal 🍔
      </button>
    </div>
  );
};

export default Header;
