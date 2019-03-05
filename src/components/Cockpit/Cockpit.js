import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = ( props ) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 500);
        return () => {
            console.log('Cockpit.js] Cleanup work in useEffect')
        }
    }, []);

    const assignedClasses = [];
    let buttonText = 'Show persons'
    let buttonColor = classes.Green;

    if(props.persons.length === 2) {
        assignedClasses.push( classes.red )
    }

    if(props.persons.length === 1) {
        assignedClasses.push( classes.bold )
    }

    if(props.showPersons) {
        buttonColor = classes.Red
        buttonText = 'Hide persons'
    }

    if(props.showPersons === false) {
        buttonColor = classes.Green
    }

    return(

        <div className="classes.Cockpit">

            <h1>{props.title}</h1>

            <p className={assignedClasses.join( ' ' )}>Try clicking a person's name.</p>

            <button
                className={buttonColor}
                onClick={props.click}>
                {buttonText}
            </button>

        </div> 
    );
};

export default cockpit;