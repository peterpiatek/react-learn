import React, { Component } from "react";

export class VisibilityControl extends Component {
  render = () => (
    <div className="form-check">
      <label htmlFor="visCtrl">Show {this.props.desc}</label>
      <input
        id="visCtrl"
        type="checkbox"
        className="m-2"
        checked={this.props.isChecked}
        onChange={e => this.props.cb(e.target.checked)}
      />
    </div>
  );
}
