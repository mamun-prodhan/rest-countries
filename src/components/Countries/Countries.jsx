import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountry = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Countries</h3>
      <div>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </div>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
