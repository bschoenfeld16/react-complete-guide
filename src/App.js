import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'ab', name: 'Max', age: 28 },
      { id: 'cd', name: 'Manu', age: 29 },
      { id: 'ef', name: 'Kim', age: 45 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => (
      p.id === id
    ))

    // update state in an immutable fashion!!
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice()
    // update state in an immutable fashion!!
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons: persons })

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)} />
            ))
          }
        </div>
      )
    }

    return (
      <div className="App" >
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons
        </button>
        {persons}
      </div >
    );
  }
}

export default App;
