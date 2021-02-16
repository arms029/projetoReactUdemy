import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black
      }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asds334d1', name: 'Max', age: 28 },
      { id: 'asd112q32', name: 'Manu', age: 29 },
      { id: 'sssxxwed3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }


  //trigar evento pelo id, mais eficiente!!!
  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //segurança, cria uma cópia do objeto
    const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }


  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              //click={() => this.deletePersonHandler(index)}
              changed={this.nameChangedHandler.bind(this, person.id)}
            //changed={(event) => this.nameChangedHandler(person.id, event)}
            >My Hobbies: Racing
            </Person>
          })}
        </div>
      );
    }

    //css dinâmico
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}>Toggle Person
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;





