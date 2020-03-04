import React, { Component } from "react";
// import styled from "styled-components";
import css from "./Person.module.scss";
import Aux from "../../../../hoc/Auxiliary";
import AuthContext from "../../../../context/auth-context";

export class Person extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  static 

  componentDidMount() {
    this.inputRef.current.focus();
  }

  state = {};

  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps");
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return {
      message:
        "This snapshot will be seen in componentDidUpdate as a param: snapsthot"
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate");
    console.log(snapshot);
  }

  render = () => {
    console.log("[Person.js] render()");

    let PersonCss = [css.Person];

    if (this.props.id === 2) {
      PersonCss.push(css.disabled);
    }
    PersonCss = PersonCss.join(" ");

    return (
      <>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <h3>Authenticated</h3> : <h3>Please log in</h3>}
        </AuthContext.Consumer>
          <div>My Name is: {this.props.name} </div>
          <div>I'm: {this.props.age} old </div>
          {this.props.children && <div>Other Info: {this.props.children}</div>}
          {
            <button onClick={() => this.props.deleteCB(this.props.id)}>
              Delete
            </button>
          }
          <input
            type="text"
            onChange={e => this.props.inputChange(e, this.props.id)}
            ref={this.inputRef}
            value={this.props.name}
          />
        
      </>
    );
  };
}
