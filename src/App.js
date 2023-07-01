import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Shutter Speed Calculator';
  }, []);

  const [calculation, setCalculation] = useState();
  const [times, setTimes] = useState(6);
  const [fractionMode, setFractionMode] = useState(false);
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(60);


  return (
    <div className="App">
      <h1>Shutter Speed Calculator</h1>


      <div className='calculator'>
        <div className='input_fields'>
          <h3>Current Shutter Speed</h3>
          <Input 
            calculation = {calculation}
            onCalculationChange = {setCalculation}
            fractionMode={fractionMode}
            onFractionModeChange={setFractionMode}
            numerator={numerator}
            onNumeratorChange={setNumerator}
            denominator={denominator}
            onDenominatorChange={setDenominator}
            />  
          <h3>Times Multiplied</h3>
          <TimesField
            times = {times}
            onTimesChange = {setTimes}
          />
        </div>
        <DisplayCalculation value={calculation} times={times} numerator={numerator} denominator={denominator} fractionMode={fractionMode} />
      </div>
    </div>
  );
}

//get the input for the calulation from the user
function Input({ calculation, onCalculationChange, fractionMode, onFractionModeChange, numerator, onNumeratorChange, denominator, onDenominatorChange}) {
  if (fractionMode) {
    return (
      <form onSubmit={e => { e.preventDefault(); }}>
        <div id="fractionInput">
          <input className="fraction_input" type="number" min={1} value={numerator} name="numerator" onChange={(e) => onNumeratorChange(e.target.value)}/>
          <p className="fraction_input">/</p>
          <input className="fraction_input" type="number" min={1} value={denominator} name="denominator" onChange={(e) => onDenominatorChange(e.target.value)}/>
        </div>
        <label>
          <input 
            type="checkbox" 
            checked={fractionMode} 
            onChange={(e) => onFractionModeChange(e.target.checked)} />
          {' '}
          Fraction Mode
        </label>
      </form>
    );
  }
  return (
    <form onSubmit={e => { e.preventDefault(); }}>
      <input type="number" value={calculation} name="calculation" placeholder="Current Speed..." onChange={(e) => onCalculationChange(e.target.value)}/>
      <label>
        <input 
          type="checkbox" 
          checked={fractionMode} 
          onChange={(e) => onFractionModeChange(e.target.checked)} />
        {' '}
        Fraction Mode
      </label>
    </form>

  );
}

function TimesField({ times, onTimesChange }) {
  return (
    <form onSubmit={e => { e.preventDefault(); }}>
      <input type="number" value={times} name="times" min={1} placeholder="Multiply by..." onChange={(e) => onTimesChange(e.target.value)}/>
    </form>
  );
}

function DisplayCalculation({ value, times, numerator, denominator, fractionMode}) {
  //check to see if fraction mode is on
  if (fractionMode) {
    if(!(numerator === undefined || numerator === null || numerator < 1 || denominator === undefined || denominator === null || denominator < 1)){
      value = numerator / denominator;
    }
    else{
      value = 0;
    }
  }
  //check to see if value is empty
  let minutes = 0;
  let seconds = 0;
  if(value === undefined || value === null || value === ''){
    value = 0;
  }
  else{
    for (let i = 0; i < times; i++){
      value = value * 2;
    }
    minutes = value / 60;
    seconds = value % 60;
  }
  //calculate the minutes and seconds
  return (
    <div>
      <h2>New Shutter Speed</h2>
      <table className='shutter_speeds'>
        <thead>
          <tr>
            <th>Seconds</th>
            <th>Minutes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{value}</td>
            <td>{minutes | 0}:{seconds}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export default App;
