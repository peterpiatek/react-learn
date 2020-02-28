/**
 * using useState hook which can put state management in the component and be fully funcitonal - not class based
 * other hooks brings full support for pure functional components building approach 
 */

import React, { useState } from "react";

export const UseStateHook = props => {
  const [personsArr, setPersons] = useState({
    // returned: data object, func to update data obj
    persons: [
      { name: "Peter", age: 35 },
      { name: "Mike", age: 40 },
      { name: "John", age: 39 }
    ],
    // when using useState hook separate state content into individual useState funcitions
    // the hook when all content is in one const will not update selected parts - it will replace whole state
    // otherState: "state 01"
  });

  const [otherVal, setOtherVal] = useState({
    otherState: "state 01"
  })

  const showAllPeople = () =>
    personsArr.persons.map(person => (
      <div key={person.name + person.age}>
        {person.name}, {person.age}
      </div>
    ));

  const addNewPerson = () => setPersons({ persons: [...personsArr.persons, { name: "New Peter", age: 33 }] });

  return (
    <div>
      {showAllPeople()}
      <div>
        <button onClick={addNewPerson}>Add</button>
      </div>
    </div>
  );
};

// class component:

/* class demoFuncHook extends Component {
  state = {
    persons: [
      { name: "Peter", age: 35 },
      { name: "Mike", age: 40 },
      { name: "John", age: 39 }
    ]
  };

  showAllPeople = () =>
    this.state.persons.map(person => (
      <div key={person.name+person.age}>
        {person.name}, {person.age}
      </div>
    ));

  render = () => <div>{this.showAllPeople()}</div>;
} */
