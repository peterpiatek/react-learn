import React, { Component } from "react";
import "./App.css";
import { TodoBanner } from "./com/TodoBanner";
import { CreateTodo } from "./com/CreateTodo";
import { TodoTableRow } from "./com/TodoTableRow";
import { VisibilityControl } from "./com/VisibilityControl";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Peter",
      todoItems: [
        { action: "Take shower", done: false },
        { action: "Shopping for the whole week", done: false },
        { action: "Eat breakfast", done: true },
        { action: "Find keys and put them on the drawer", done: false }
      ],
      showCompleted: true
    };
  }

  toggleTodo = itemSearch => {
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === itemSearch.action
          ? { ...item, done: !itemSearch.done }
          : item
      )
    });
  };

  todoTableRows = doneState =>
    this.state.todoItems
      .filter(item => item.done === doneState)
      .map(item => (
        <TodoTableRow
          key={item.action}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo}
          item={item}
        />
      ));

  addNewTodo = newTodo => {
    this.setState(
      {
        todoItems: [...this.state.todoItems, { action: newTodo, done: false }]
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state));
      }
    );
  };

  removeTodo = itemToRemove => {
    this.setState({
      todoItems: this.state.todoItems.filter(
        item => item.action !== itemToRemove.action
      )
    });
  };

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "Peter",
            todoItems: [
              { action: "Take shower", done: false },
              { action: "Shopping for the whole week", done: false },
              { action: "Eat breakfast", done: true },
              { action: "Find keys and put them on the drawer", done: false }
            ],
            showCompleted: true
          }
    );
  };

  render = () => (
    <div className="container">
      <TodoBanner
        name={this.state.userName !== undefined ? this.state.userName : ""}
        items={this.state.todoItems.filter(item => item.done === false).length}
      />
      <CreateTodo callback={this.addNewTodo} />
      <table className="table table-stripped">
        <thead>
          <tr>
            <th width="auto">
              <h6>Description</h6>
            </th>
            <th width="100">
              <h6>Progress</h6>
            </th>
            <th width="100">Actions</th>
          </tr>
        </thead>
        <tbody>{this.todoTableRows(false)}</tbody>
      </table>
      <div className="bg-secondary text-white text-center p-2">
        <VisibilityControl
          desc="Completed Tasks"
          isChecked={this.state.showCompleted}
          cb={checked => {
            this.setState({
              showCompleted: checked
            });
          }}
        />
      </div>
      {this.state.showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th width="auto">Description</th>
              <th width="100">Done</th>
              <th width="100">Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows(true)}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
