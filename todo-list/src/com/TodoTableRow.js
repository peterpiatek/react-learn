import React, { Component } from "react";

export class TodoTableRow extends Component {
  render = () => (
    <tr>
      <td>{this.props.item.action}</td>
      <td>
        <input
          type="checkbox"
          checked={this.props.item.done}
          onChange={() => this.props.toggleTodo(this.props.item)}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => this.props.removeTodo(this.props.item)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
