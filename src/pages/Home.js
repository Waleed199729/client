import React from "react";
import "../App.css";
import { useQuery, gql } from "@apollo/client"; // automatically request (GET,POST etc) when the page render like useEffect
import { Link } from "react-router-dom";

// we are fetching info from the url in which list of countries exist
const QUERY_LIST_OF_COUNTRIES = gql`
  {
    countries {
      name
      capital
      emoji
      currency
      code
    }
  }
`;
// console.log("Query Data", QUERY_LIST_OF_COUNTRIES); // yahan pr hamare pas kind, location , definition etc araho hoti hain

const Home = () => {
  const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES);
  return (
    <>
      <div className="home">
        <div className="title">
          <h1> List of Countries </h1>
          <Link to="/search"> Go to the Search </Link>
        </div>
        <div className="body_country">
          {loading && <h3> Data is Loading...</h3>}
          {error && <h3> {error.message} </h3>}
          {data &&
            data.countries?.map((country, key) => {
              //   console.log("C Key", key);                                  //key => builtIn no assign hwa hota ha country ko
              //   console.log("Countries Data", country);
              return (
                <div className="listofCountries" key={key}>
                  <h2>
                    {country.name}
                    <label> {country.emoji} </label>
                  </h2>
                  <h4>{country.capital} </h4>
                  <h4>
                    {country.currency} | {country.code}{" "}
                  </h4>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
