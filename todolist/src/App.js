import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({addTodo}) => {
  
    let input;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         To Do List
        </p>
        <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  
      </header>
    </div>
  );
}


export default App;
