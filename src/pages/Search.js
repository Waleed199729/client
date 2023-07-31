// A useLazyQuery is a Hookn that excute the graphQL on demand and it is also used separatly for enhacing the speed of the we b app by excuting the required component instaed of excuting the all components.
import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const QUERY_SEARCH_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      code
      currency
    }
  }
`;

const Search = () => {
  const [countrySearch, setCountrySearch] = useState("");

  const [searchCountry, { data, loading, error }] =
    useLazyQuery(QUERY_SEARCH_COUNTRY); //hook is using here

  return (
    <div className="search">
      <div className="inputs">
        <h1>Search The Countries</h1>
        <Link to="/"> Back to Home </Link>

        <input
          type="text"
          placeholder="Enter the Country Code (ex. BR)..."
          onChange={(e) => setCountrySearch(e.target.value)}
        />

        <button
          onClick={() =>
            searchCountry({ variables: { code: countrySearch.toUpperCase() } })
          }
        >
          Submit
        </button>
      </div>

      <div className="searchCountry">
        {data && (
          <div className="countryDisplay">
            <h1>
              {data.country.name} {data.country.emoji}{" "}
            </h1>
            <h1> Capital: {data.country.capital}</h1>
            <h1> Country Code: {data.country.code}</h1>
            <h1> Currency: {data.country.currency}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
