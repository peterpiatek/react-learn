import React, { Component } from "react";

export class TodoBanner extends Component {
  render = () => (
    <>
      <h4 className="bg-primary text-white text-center p-2 m-0">
        {this.props.name}'s Tasks
      </h4>
      <h6 className="bg-info text-white text-center p-2">
        Tasks remaining:{" "}
        {this.props.items}
      </h6>
    </>
  );
}
