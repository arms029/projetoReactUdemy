import React, { useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request here...
        setTimeout(() => {
            console.log('[Cockpit.js] dummy request complete(POST, GET, etc)');
        },1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);
    // }, [props.persons]); //will activate on persons change

    //another useEffect(), call as much as you need!!!
    useEffect(() => {
        console.log('[Cockpit.js] second useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in second useEffect');
        }
    });//call in every situation

    //css dinâmico
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Person
        </button>
        </div>
    )
};

export default Cockpit;