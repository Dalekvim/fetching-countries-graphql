import React from "react";
import { gql, useQuery } from "@apollo/client";

import { Lister, listItem } from "./Lister";
import { useParams } from "react-router-dom";

const COUNTRY = gql`
  query($countryCode: ID!) {
    country(code: $countryCode) {
      name
      native
      phone
      continent {
        name
      }
      capital
      currency
      languages {
        code
        name
      }
    }
  }
`;

interface country {
  name: string;
  native: string;
  phone: string;
  continent: {
    name: string;
  };
  capital: string;
  currency: string;
  languages: listItem[];
}

interface data {
  country: country;
}

export const Country: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();

  const { loading, error, data } = useQuery<data>(COUNTRY, {
    variables: { countryCode: countryCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data.</p>;

  const { country } = data;

  const {
    name,
    native,
    phone,
    continent,
    capital,
    currency,
    languages,
  } = country;

  return (
    <>
      <h1>{name} Page</h1>
      <h2>Native: {native}</h2>
      <p>Phone: {phone}</p>
      <p>Continent: {continent.name}</p>
      <p>Capital: {capital}</p>
      <p>Currency: {currency}</p>
      <div className="Languages">
        <h3>Languages:</h3>
        <Lister list={languages} />
      </div>
    </>
  );
};
