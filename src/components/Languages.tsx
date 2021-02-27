import React from "react";
import { gql, useQuery } from "@apollo/client";

import { Lister, listItem } from "./Lister";

const LANGUAGES = gql`
  {
    languages {
      code
      name
    }
  }
`;

interface data {
  languages: listItem[];
}

export const Languages: React.FC = () => {
  const { loading, error, data } = useQuery<data>(LANGUAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data.</p>;

  const { languages } = data;

  return (
    <>
      <h1>Languages Page</h1>
      <Lister list={languages} />
    </>
  );
};
