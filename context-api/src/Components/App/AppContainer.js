import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "../../store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    const changeMessage = () => {
      if (this.state.message === "Hello") {
        this.setState({
          message: "Bye Bye",
        });
      } else {
        this.setState({
          message: "Hello",
        });
      }
    };
    this.state = {
      message: "Hello",
      changeMessage,
    };
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
