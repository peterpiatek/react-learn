import React, { Component } from "react";
import { UserInput } from "./AppAssigment1/UserInput";
import { UserOutput } from "./AppAssigment1/UserOutput";

export default class AppAssigment1 extends Component {
  state = {
    userName: "No name"
  };

  userNameUpdFn(e) {
    this.setState({
      userName: e.target.value
    });
  }

  render = () => (
    <div className="card">
      <UserInput
        userNameUpd={this.userNameUpdFn.bind(this)}
        userName={this.state.userName}
      />
      <UserOutput userName={this.state.userName} />
    </div>
  );
}
