import React, { useState } from 'react';
import './App.css';
import IfElseStatements from './components/IfElseStatements';
import TernaryOperator from './components/TernaryOperator';

function App() {
  return (
    <div className="App">
        <h1>Conditional Rendering</h1>
        <p>Click the button to see the conditional rendering in action!</p>

        <div className="">
          <h2>If-Else Statements</h2>
          <IfElseStatements />
        </div>

        <div className="">
          <h2>Ternary Operator</h2>
          <TernaryOperator />
        </div>
    </div>
  );
}

export default App;




