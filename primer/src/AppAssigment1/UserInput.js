import React, { Component } from "react";

export class UserInput extends Component {
  render = () => (
    <>
      <div>Put user Name</div>
      <input
        type="text"
        onChange={this.props.userNameUpd}
        value={this.props.userName}
      />
    </>
  );
}
