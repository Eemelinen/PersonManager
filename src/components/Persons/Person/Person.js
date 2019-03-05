import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    render() {

        console.log('[Person.js] rendering...');

        return (
            <Aux>
                <p onClick={this.props.click}>I'm a person! My name is {this.props.name} age: {this.props.age}</p>
                <p> {this.props.children} </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    };
};

export default withClass(Person, classes.Person);