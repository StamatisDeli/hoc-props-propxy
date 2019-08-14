import React from "react";
import withCounter from "./withCounter";
import NestedCounter from "./NestedCounter";

function HoverCounter(props) {
  const { count, incrementCount } = props;
  return (
    <>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      <NestedCounter />
    </>
  );
}

export default withCounter(HoverCounter, 1);
