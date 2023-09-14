import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area } = country;
  const [isVisited, setIsVisited] = useState(false);

  const handleClick = () => {
    setIsVisited(!isVisited);
  };
  return (
    <div className={`country ${isVisited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: isVisited ? "green" : "red" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="flags" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <button>{isVisited ? "Visited" : "Will Visit"}</button>
      {isVisited ? "I have Visited" : "I will Visit"}
    </div>
  );
};

export default Country;
