import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        
        console.log('[Person.js] rendering...');

        let authMessage = "Please log in";

        if(this.context.authenticated) {
            authMessage = "Authenticated!"
        };

        return (
            <Aux>

                {authMessage}

                {/* { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in.</p> } */}

                <p onClick={this.props.click}>I'm a person! My name is {this.props.name} age: {this.props.age}</p>
                <p> {this.props.children} </p>
                <input
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);