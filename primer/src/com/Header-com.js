import React, { Component } from "react";

export class HeaderCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4
    };

    this.changeVal = this.changeVal.bind(this);
  }

  isEven = () => {
    return this.state.count % 2 === 0 ? "Even" : "Odd";
  };

  showArgs = person => {
    console.log((500.020).toFixed(6));
    console.log((500).toExponential(3));
  };

  changeVal() {
    this.showArgs({ name: "Peter", age: 35 });
    this.setState({ count: this.state.count + 1 });
  }

  setClass = () => (this.state.count % 2 === 0 ? "bg-primary" : "bg-secondary");

  render = () => (
    <>
      <h1>Is it Even? : {this.isEven()}</h1>
      <button className="btn btn-primary btn-sm" onClick={this.changeVal}>
        Add
      </button>
      <table className="table table-stripped table-sm m-2">
        <thead>
          <tr>
            <th>Value</th>
            <th>Even?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.count}</td>
            <td>{this.isEven()}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <button
                className="btn btn-primary btn-sm"
                disabled={this.state.count >= 10 ? true : false}
                onClick={this.changeVal}
              >
                Add 1
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
