import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export interface listItem {
  code: string;
  name: string;
}

interface Props {
  list: listItem[];
}

export const Lister: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map(({ code, name }) => (
        <ListGroup.Item key={code}>{name}</ListGroup.Item>
      ))}
    </>
  );
};
