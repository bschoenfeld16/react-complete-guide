import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Kim', age: 45 }
    ]
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Kim', age: 45 }
      ]
    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      {personsState.persons.map(person => (
        <Person name={person.name} age={person.age} />
      ))}
    </div>
  );
}

export default app;


// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Kim', age: 45 }
//   ]
// }

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       { name: 'Maximilian', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Kim', age: 45 }
//     ]
//   })
// }