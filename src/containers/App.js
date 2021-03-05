import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asds334d1', name: 'Max', age: 28 },
      { id: 'asd112q32', name: 'Manu', age: 29 },
      { id: 'sssxxwed3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps')
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (id, index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // persons.splice(index, 1);
    // this.setState({ persons: persons });

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    persons.splice(personIndex, 1);

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

  toggleCockpitHandler = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    })
  }


  render() {
    console.log('[App.js] rendering...')
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }

    return (
      <div className={classes.App}>
        <button className={classes['main-button']} onClick={this.toggleCockpitHandler} >toggle Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        /> : null}
        {persons}
      </div>
    );
  }
}

export default App;
