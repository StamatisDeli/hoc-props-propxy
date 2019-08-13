import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  // }
  // incrementCount = () => {
  //   this.setState(prevState => {
  //     return { count: prevState.count + 1 };
  //   });
  //   // let counter = this.state.count;
  //   // counter += 1;
  //   // this.setState({ count: counter });
  // };
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </>
    );
  }
}

export default withCounter(ClickCounter, 5);
