import React, { useState } from 'react';
import './App.css';
import IfElseStatements from './components/IfElseStatements';
import TernaryOperator from './components/TernaryOperator';

function App() {
  return (
    <div className="App">
        <h1>Conditional Rendering</h1>
        <IfElseStatements />

        <h1>Ternary Operator</h1>
        <TernaryOperator />
    </div>
  );
}

export default App;




