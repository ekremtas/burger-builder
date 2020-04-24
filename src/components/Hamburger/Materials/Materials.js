import React from "react";
import "./styles.css";
import Material from "./Material/Material";

const Materials = (props) => {
  const { malzeme } = props;
  const elements = [];
  for (let i = 0; i < malzeme.count; i++) {
    // eslint-disable-next-line no-unused-expressions
    elements.push(<Material key={Math.random()} malzeme={malzeme} />);
  }
  return elements;
};

export default Materials;
