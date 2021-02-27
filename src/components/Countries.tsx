import React from "react";
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

import { listItem } from "./Lister";
import { CountryLister } from "./CountryLister";

const COUNTRIES = gql`
  query($continentCodes: [String!]!) {
    countries(filter: { continent: { in: $continentCodes } }) {
      code
      name
    }
  }
`;

interface data {
  countries: listItem[];
}

export const Countries: React.FC = () => {
  const { continentCode } = useParams<{ continentCode: string }>();

  const { loading, error, data } = useQuery<data>(COUNTRIES, {
    variables: { continentCodes: [continentCode] },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data.</p>;

  const { countries } = data;

  return (
    <>
      <h1>Countries in {continentCode} Page</h1>
      <CountryLister list={countries} />
    </>
  );
};
