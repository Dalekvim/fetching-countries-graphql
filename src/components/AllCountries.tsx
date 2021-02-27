import React from "react";

import { gql, useQuery } from "@apollo/client";

import { CountryLister } from "./CountryLister";
import { listItem } from "./Lister";

const ALLCOUNTRIES = gql`
  {
    countries {
      code
      name
    }
  }
`;

interface data {
  countries: listItem[];
}

export const AllCountries: React.FC = () => {
  const { loading, error, data } = useQuery<data>(ALLCOUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data.</p>;

  const { countries } = data;

  return (
    <>
      <h1>All Countries Page</h1>
      <CountryLister list={countries} />
    </>
  );
};
