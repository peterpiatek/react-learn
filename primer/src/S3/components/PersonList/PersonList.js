import React, { Component } from "react";
import { PureComponent } from "react";
import styled from "styled-components";
import { Person } from "./Person/Person";

export default class PersonList extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState){
    // return true;
    if(nextProps.persons !== this.props.persons
      || nextProps.inputChange !== this.props.inputChange
      || nextProps.deleteCB !== this.props.deleteCB){
      return true;
    } else {
      return false;
    }
  } */

  renderPeople() {
    return this.props.persons.map(p => (
      <Person
        key={p.id}
        id={p.id}
        name={p.name}
        age={p.age}
        inputChange={this.props.updateName}
        deleteCB={this.props.deletePerson}
        isAuth={this.props.isAuth}
      />
    ));
  }

  render = () => {
    return this.renderPeople();

    /* let personsList = "No people";

    if (this.props.showPeople) {
      personsList = this.renderPeople();
    }
    return personsList; */
  };
}
