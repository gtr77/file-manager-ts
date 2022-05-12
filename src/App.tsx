import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

const App = () => {
  const personName = {
    first: "Yecid",
    last: "Romero"
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];
  return (
    <div className="App">
      learn react
      <Greet name={"Gustavo"} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
