import React, { Component } from 'react';
// import React, { useState } from 'react';
import'./App.css';
import '../components/Persons/Person/Person.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // == Component Creation Lifecycle (1) ==
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  };

  state = {
    persons: [
      { key: "sacacs", name: "Eemeli", age: 15 },
      { key: "1234", name: "Mathiass", age: 29 },
      { key: "12345", name: "Willem", age: 31 }
    ],

    showPersons: false,

    personsOriginal: [
      { key: "sacacs", name: "Eemeli", age: 15 },
      { key: "1234", name: "Mathiass", age: 29 },
      { key: "12345", name: "Willem", age: 31 }
    ]
  }


  // == Component Creation Lifecycle (2) ==
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // == Component Creation Lifecycle (4) ==
  componentDidMount() {
    console.log('[App.js] componenDidMount');
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    const org = this.state.personsOriginal;

    this.setState({
      persons: org
    })

    this.setState( {
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {

    // == Luodaan uusi käsiteltävä kopio staten persons arraysta.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})

  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.key === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };
      
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    console.log(persons[personIndex]);

    this.setState({persons: persons})

  }

  // == Component Creation Lifecycle (3) ==d
  render() {
    console.log('[App.js] render');

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (

      <div className="App">

        <Cockpit
          title={this.props.appTitle}
          click={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />

        {persons}

      </div>
    )};
};

export default App;