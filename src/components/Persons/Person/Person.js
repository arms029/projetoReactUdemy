import React, { Component } from 'react';
import classes from './Person.css'

class Person extends Component {
    render() {
        console.log('[person.js] rendereing')
        return (
            <div className={classes.Person} >
                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
                <button
                    className={classes.BtnDel}
                    onClick={this.props.click}>DELETE
            </button>
            </div>
        );
    }
};

export default Person;