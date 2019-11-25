import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Kim', age: 45 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Kim', age: 45 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {this.state.persons.map(person => (
          <Person name={person.name} age={person.age} />
        ))}
      </div >
    );
  }
}

export default App;
