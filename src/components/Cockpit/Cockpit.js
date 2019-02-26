import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = ( props ) => {

    const assignedClasses = [];
    let buttonText = 'Show persons'

    if(props.persons.length === 2) {
        assignedClasses.push( classes.red )
    }

    if(props.persons.length === 1) {
        assignedClasses.push( classes.bold )
    }

    let buttonColor = classes.Green;

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