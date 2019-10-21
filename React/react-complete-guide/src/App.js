import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';




class App extends Component {

  state = {
    persons: [
      { id: '213', name: 'Max', age: 25 },
      { id: '42', name: 'Manu', age: 29 },
      { id: '12', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  


  nameChangedHandler = (event, id) => {
    //console.log('Was Clicked');
    //DON'T DO THIS:> this.state.persons[0].name = "Maxi";
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    //update person copiado o antigo:
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //set state com person updated
    this.setState( {persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
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
    if(this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })}
          
          </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Component testing:</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons</button>
        {persons}
          


      </div>
    );
  }
}

export default App;
