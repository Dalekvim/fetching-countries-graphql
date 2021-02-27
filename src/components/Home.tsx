import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ListGroup>
        <Link to="/continents">
          <ListGroup.Item action>Continents</ListGroup.Item>
        </Link>
        <Link to="/countries">
          <ListGroup.Item action>Countries</ListGroup.Item>
        </Link>
        <Link to="/languages">
          <ListGroup.Item action>Languages</ListGroup.Item>
        </Link>
      </ListGroup>
    </>
  );
};
