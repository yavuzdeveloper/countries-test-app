import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Country from "./Country"


export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => 
        setCountries(response.data))
      .catch(error => console.log({ error }));
  }, []);

console.log("COUNTRIES:",countries);

  return (
    <div className="App">
    <h1> 
      <img src="https://avatars3.githubusercontent.com/u/60869810?v=4" alt="react-logo" style={{ width: "20px", padding:"0 10px 0 0" }}/>
      Countries
    </h1>
      {countries.map(country => 
        <Country  country={country}/>
      )}
    </div>
  );
}


