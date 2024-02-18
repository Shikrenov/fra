import './App.css';
import React from 'react';

const Person = () => {
  return (
    <div>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
      </div>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person />
      </div>
  );
}
export default App;