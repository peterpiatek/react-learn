import React, { Component } from "react";
import "./App.css";
import http from "./S3/async";
import { UseStateHook } from "./S3/UseStateHook";
import { Person } from "./S3/Person";

async function sum() {
  let data = await http([1, 2, 3, 4, 5]);
  console.log(data);
}

// sum();

export class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Peter", age: 35 },
      { id: 2, name: "Mike", age: 40 },
      { id: 3, name: "John", age: 39 }
    ],
    showPeople: false
  };

  renderPeople() {
    return (
      <>
        {this.state.persons.map(p => (
          <Person
            key={p.id}
            id={p.id}
            name={p.name}
            age={p.age}
            inputChange={this.updateName.bind(this)}
            deleteCB={this.deletePerson.bind(this)}
          />
        ))}
      </>
    );
  }

  deletePerson(id) {
    this.setState({
      persons: this.state.persons.filter(person =>
        person.id !== id ? person : null
      )
    });
  }

  updateName(e, id) {
    return this.setState({
      persons: this.state.persons.map(person =>
        person.id === id ? { ...person, name: e.target.value } : person
      )
    });
  }

  showhidePeople = () => {
    this.setState({
      showPeople: !this.state.showPeople
    });
  };

  render = () => {

    let personsList = "No people";

    if(this.state.showPeople){
      personsList = this.renderPeople();
    }

    return (
      <div className="container">
        <button onClick={this.showhidePeople}>
          {this.state.showPeople === true ? "Hide" : "Show"}
        </button>
        { personsList }
      </div>
    );
  };
}

export default App;
