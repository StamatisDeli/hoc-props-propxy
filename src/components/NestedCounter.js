import React from "react";
import DeeperNestedCounter from "./DeeperNestedCounter";

function NestedCounter(props) {
  return (
    <>
      <h3> Nested Component </h3>
      <DeeperNestedCounter />
    </>
  );
}

export default NestedCounter;
