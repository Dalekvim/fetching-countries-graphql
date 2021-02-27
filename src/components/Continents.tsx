import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { listItem } from "./Lister";

const CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

export interface data {
  continents: listItem[];
}

export const Continents: React.FC = () => {
  const { loading, error, data } = useQuery<data>(CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data.</p>;

  const { continents } = data;

  return (
    <>
      <h1>Continents Page</h1>
      <ListGroup>
        {continents.map(({ code, name }) => (
          <Link to={`/countries/${code}`}>
            <ListGroup.Item key={code} action>
              {name}
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </>
  );
};
