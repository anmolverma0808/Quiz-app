import React from "react"
import Question from "./components/Questions"
import './App.css';

function App() {
  return (
      <div>
        <h1>Quiz App</h1>
        <div className="container">
          <Question/>
        </div>
      </div>
  );
}

export default App;
