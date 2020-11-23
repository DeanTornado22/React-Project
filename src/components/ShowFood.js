import React from "react";

const ShowFood = ({ searchResult }) => {
  return (
    <div>
      <h2>{searchResult.strCategory}</h2>
      <img src={searchResult.strMealThumb} />
      <p>{searchResult.strInstructions}</p>
    </div>
  );
};

export default ShowFood;
