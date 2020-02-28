import React, { Component } from "react";

export class UserOutput extends Component {
  render = () => (
    <div>
      <h1>{this.props.userName}</h1>
    </div>
  );
}
