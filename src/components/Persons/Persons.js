import React, { Component } from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import Person from './Person/Person'

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons)
            return true;
        else
            return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering... ');
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    name={person.name}
                    age={person.age}

                    // click={this.deletePersonHandler.bind(this, index)}
                    click={() => this.props.clicked(person.id, index)}
                    // changed={this.nameChangedHandler.bind(this, person.id)}
                    changed={(event) => this.props.changed(person.id, event)}
                >My Hobbies: Racing
                </Person>
            </ErrorBoundary>
        })
    };
}
export default Persons;