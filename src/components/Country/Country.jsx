import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area } = country;
  const [isVisited, setIsVisited] = useState(false);

  const handleClick = () => {
    setIsVisited(!isVisited);
  };
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="flags" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={handleClick} className="button">
        {isVisited ? "Visited" : "Will Visit"}
      </button>
      {isVisited ? "I have Visited" : "I will Visit"}
    </div>
  );
};

export default Country;
