import React, { useState } from 'react';
import './App.css';
import { total } from './functions';


const App = ()  => {
  const [formData, setFormData] = useState({
    startingAmt: '',
    betAmount: '',
    numberOfBets: '',
    percentage: '',
    totalRuns: ''
  })
  const [results, setResults] = useState(0)

  const onChange1 = (event) => {
    setFormData((formData) => ({
      ...formData,
      startingAmt: event.target.value,
    }));
  };

  const onChange2 = (event) => {
    setFormData((formData) => ({
      ...formData,
      betAmount: event.target.value,
    }));
  };

  const onChange3 = (event) => {
    setFormData((formData) => ({
      ...formData,
      numberOfBets: event.target.value,
    }));
  };

  const onChange4 = (event) => {
    setFormData((formData) => ({
      ...formData,
      percentage: event.target.value,
    }));
  };

  const onChange5 = (event) => {
    setFormData((formData) => ({
      ...formData,
      totalRuns: event.target.value,
    }));
  };

  const onClick = () => {
    let avgReturn = total(formData.totalRuns, formData.startingAmt, formData.betAmount, formData.numberOfBets, formData.percentage)
    setResults(avgReturn)
  }

  return (
    <div className="App">
      <input onChange={onChange1}
            value={formData.startingAmt}
            type={"text"}
            id="startingAmt"
            placeholder="StartingAmt"
            />
      <input onChange={onChange2}
            value={formData.betAmount}
            type={"text"}
            id="betAmount"
            placeholder="betAmount"
            />
      <input onChange={onChange3}
            value={formData.numberOfBets}
            type={"text"}
            id="numberOfBets"
            placeholder="numberOfBets"
            />
      <input onChange={onChange4}
            value={formData.percentage}
            type={"text"}
            id="percentage"
            placeholder="percentage"
            />
      <input onChange={onChange5}
            value={formData.totalRuns}
            type={"text"}
            id="totalRuns"
            placeholder="totalRuns"
            />
        <button
          onClick={onClick}
        > calculate average
        </button>
        <p>
          results: {results}
        </p>
    </div>
  );
}

export default App;
