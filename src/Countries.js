import axios from "axios";
import React, { useEffect, useState } from "react";
//import fetchCountries from "./_fetchCountries";



export default function Countries() {
    // const { country } = props
  const [detail, setDeatil] = useState(false);

  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const fetchCountries = async () => {
    await axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
         setLoaded(false)
        })
      .catch(error => { 
        console.log({ error });
        setLoaded(true);
      });
  }

// const axios = require("axios");
// const fetchData = () => {
//   axios.get("https://restcountries.eu/rest/v2/all")
//   .then(response => console.log("RESPONSE:",response.data))
//   .catch(error => console.log({error}))
// }


  useEffect(() => {
    // axios
    //   .get("https://restcountries.eu/rest/v2/all")
    //   .then(response => 
    //     setCountries(response.data))
    //   .catch(error => console.log({ error }));

    // fetchCountries();
    // fetchCountries().then(countries => {
    //   setCountries(countries);
    //   setLoaded(false);
    // })

    //    fetchData();

fetchCountries();

  }, []);


//console.log("COUNTRİES:", countries);

    return (
          <div style={{ padding:"25px 0 25px 0" }}>
          { loaded ? (
            <div>...loading</div>
          ) : ( <div>

              {/* {countries && countries.map(country => 
              <h3 data-testid="resolved">{country.name}</h3>
             )} */}

          </div> )             
          }

          <div>  
            {countries && countries.map(country => ( 
              <div>
                <h3>{country.name}</h3> 
                { !detail && <button onClick={(country) => setDeatil(true)}>Detail show</button> }
                { detail && <button onClick={() => setDeatil(false)}>Detail hide</button> }
              </div> 
            )
            
            )}
          </div>

             
              
          </div>
    );
}







            // { !detail && <button onClick={() => setDeatil(true)}>Detail show</button> }
            // { detail && <button onClick={() => setDeatil(false)}>Detail hide</button> }
            // { detail && 
            //     <div>
            //         <p>Capital: {country.capital}</p>
            //         <p>Population: {country.population}</p>
            //         <p>Region: {country.region}</p> 
            //         <p>Native Name: {country.nativeName}</p> 
            //         <p>Calling Codes: {country.callingCodes}</p> 
            //     </div>
            // }
            // <p>
            //   <img
            //     src={props.country.flag}
            //     alt={props.country.name}
            //     style={{ width: "100px" }}
            //   />
            // </p> 