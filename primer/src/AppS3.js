import React, { Component } from "react";
import "./App.css";
import http from "./S3/async";
import { UseStateHook } from "./S3/UseStateHook";
import Header from "./S3/components/Header/Header";
import PersonList from "./S3/components/PersonList/PersonList";
import withClass from "./hoc/withClass";
import AuthContext from "./context/auth-context";

async function sum() {
  let data = await http([1, 2, 3, 4, 5]);
  console.log(data);
}

export class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Peter", age: 35 },
      { id: 2, name: "Mike", age: 40 },
      { id: 3, name: "John", age: 39 }
    ],
    showPeople: false,
    showHeader: true,
    changeCounter: 0,
    auth: false
  };

  deletePerson(id) {
    this.setState({
      persons: this.state.persons.filter(person =>
        person.id !== id ? person : null
      )
    });
  }

  updateName(e, id) {
    let oldName = e.target.value;
    return this.setState((prevState, props) => {
      return {
        persons: this.state.persons.map(person =>
          person.id === id ? { ...person, name: oldName } : person
        ),
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  showhidePeople = () => {
    this.setState({
      showPeople: !this.state.showPeople
    });
  };

  loginHandler () {
    console.log("login");
    this.setState({
      auth: true
    });
  };

  render = () => (
    <div classes="container">
      <h2>Title: {this.props.AppTitle}</h2>
      <button
        onClick={() => {
          this.setState({ showHeader: !this.state.showHeader });
        }}
      >
        Hide Header
      </button>
      <AuthContext.Provider
        value={{ authenticated: this.state.auth, login: this.loginHandler.bind(this) }}
      >
        {this.state.showHeader && (
          <Header
            persons={this.state.persons}
            showPeople={this.state.showPeople}
            showhidePeople={this.showhidePeople}
          />
        )}

        {this.state.showPeople && (
          <PersonList
            showPeople={this.state.showPeople}
            persons={this.state.persons}
            updateName={this.updateName.bind(this)}
            deletePerson={this.deletePerson.bind(this)}
          />
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default withClass(App, "App");
