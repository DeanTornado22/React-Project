import React from "react";

const api_key = "4a53e698-9727-4bd5-bdff-6853653ba14c";
const url_target =
  "https://api.globalgiving.org/api/public/services/search/projects";
const Header = ({ textSearch, setTextsearch, listResult, setListResult }) => {
  const enterHandler = (e) => {
    if (e.key == "Enter") {
      const url = `${url_target}?api_key=${api_key}&q=${e.target.value}`;
      console.log("Link url", url);
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let results = data.search.response.projects.project;
          console.log(data);
          results = results.map((result) => {
            let id = result.id;
            let image = result.imageLink == undefined ? "" : result.imageLink;
            let title = result.image.title;
            let contactCity = result.contactCity;
            let contactName = result.contactName;
            let contactUrl = result.contactUrl;
            let donationOptions = result.donationOptions;
            let summary = result.summary;
            let themeName = result.themeName;
            return {
              id,
              image,
              title,
              contactCity,
              contactName,
              contactUrl,
              donationOptions,
              summary,
              themeName,
            };
          });
          setListResult(results);
          console.log("Result after set list result:", results);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="first-container">
      <h1>Charity Find</h1>
      <input
        type="text"
        placeholder="Please Search For Place For Charity"
        onKeyDown={enterHandler}
      />
    </div>
  );
};

export default Header;
