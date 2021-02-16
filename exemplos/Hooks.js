import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//Hooks possui vários states, tendo como vantagem a manipulação individual de cada state, 
//Porém, ao mudar os valores do state, n é gerado um merge com o state anterior, ou seja, 
//Os novos valores são substítuidos!!!
const AppHooks = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: 'some other value'
  });

  console.log(personsState);
  console.log(otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  const nameChangedHandler = (event) => {
    setPersonsState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={switchNameHandler.bind(null, 'Maximilian!!')}>Switch Name
        </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(null, 'Max!')}
        changed={nameChangedHandler} >My Hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}


export default AppHooks;
