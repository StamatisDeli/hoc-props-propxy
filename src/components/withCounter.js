import React from "react";
//HOC
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          incrementCount={this.incrementCount}
          {...this.state}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
