/**
 * props destructuring
 */

import React, { Component } from "react";

export class Person extends Component {
  render = () => (
    <div>
      <div>My Name is: {this.props.name} </div>
      <div>I'm: {this.props.age} old </div>
      {this.props.children && <div>Other Info: {this.props.children}</div>}
      {
        <button 
          onClick={() => this.props.deleteCB(this.props.id)}>
          Delete
        </button>
      }
      <input
        type="text"
        onChange={e => this.props.inputChange(e, this.props.id)}
        value={this.props.name}
      />
    </div>
  );
}
