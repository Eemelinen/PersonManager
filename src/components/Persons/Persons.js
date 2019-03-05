import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  // //== Component Update lifecycle (1)
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //== Component Update lifecycle (2)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  //== Component Update lifecycle (3)
  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!' };
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  //== Component Update lifecycle (5)
  componentDidUpdate(prevprops, PrevState, Snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(Snapshot);
  }

    //== Component Update/Creation lifecycle (4)
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map(( person, index ) => {
      return (
        <Person
          click={() => this.props.click( index )}
          name={person.name}
          age={person.age}
          key={person.key}
          changed={(event) => this.props.changed( event, person.key )}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  };
};
  export default Persons;