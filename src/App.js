import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    console.log("plus");
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log("minus");
  };

  render() {
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;
