import React from "react";
import withCounter from "./withCounter";

function NestedCounter(props) {
  const { count, incrementCount } = props;
  return (
    <>
      <h3 style={{ color: "red" }}>
        Deeper Nested Component Inside Nested Component
      </h3>
      <h4 style={{ color: "red" }} onMouseOver={incrementCount}>
        Hovered {count} times
      </h4>
    </>
  );
}

export default withCounter(NestedCounter, 3);
