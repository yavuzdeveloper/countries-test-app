import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
//import Countries from "./Countries"
import Country from "./Country"


export default function App() {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  
  const fetchCountries = async () => {
    await axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
         setLoaded(true)
        })
      .catch(error => { 
        console.log({ error });
        setLoaded(false);
      });
  }

  useEffect(() => {
    // axios
    //   .get("https://restcountries.eu/rest/v2/all")
    //   .then(response => 
    //     setCountries(response.data))
    //   .catch(error => console.log({ error }));

  fetchCountries();

  }, []);



  return (
    <div className="App">
      <h1> 
        <img 
          src="https://avatars3.githubusercontent.com/u/60869810?v=4" 
          alt="react-logo" 
          style={{ width: "20px", padding:"0 10px 0 0" }}
        />
        Countries
      </h1>
 {/* <Countries />  */}


      { loaded ? ( <div> 
      { countries &&  countries.map(country =>
        <Country  country={country}/> 
      )}
    </div>
    ) : ( <p>
          <img 
            src= "https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif" 
            alt="imgLoading"       
          />
        </p>)
      }
    </div>
  );
}


//   <span data-testid="resolved" >{"countries"}</span>

//     { loaded ? ( <div> 
// { countries.map(country =>
//         <Country  country={country}/> 
// )}
//     </div>
     
//     ) : ( <p data-testid="loading"> Loading...
//           {/* <img 
//             src= "https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif" 
//             alt="imgLoading"       
//           /> */}
//         </p>)
//     }