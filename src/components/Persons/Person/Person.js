import React, { Component } from 'react';

class Person extends Component {

    render() {

        console.log('[Person.js] rendering...');

        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm a person! My name is {this.props.name} age: {this.props.age}</p>
                <p> {this.props.children} </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        );
    };
};

export default Person;