import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import { listItem } from "./Lister";

interface Props {
  list: listItem[];
}

export const CountryLister: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map(({ code, name }) => (
        <Link to={`/country/${code}`}>
          <ListGroup.Item key={code} action>
            {name}
          </ListGroup.Item>
        </Link>
      ))}
    </>
  );
};
