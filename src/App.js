import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Shutter Speed Calculator';
  }, []);

  const [calculation, setCalculation] = React.useState();
  const [times, setTimes] = React.useState(6);


  return (
    <div className="App">
      <h1>Shutter Speed Calculator</h1>


      <div className='calculator'>
        <div className='input_fields'>
          <Input 
            calculation = {calculation}
            onCalculationChange = {setCalculation}
          />  
          <TimesField
            times = {times}
            onTimesChange = {setTimes}
          />
        </div>
        <DisplayCalculation value={calculation} times={times} />
      </div>
    </div>
  );
}

//get the input for the calulation from the user
function Input({ calculation, onCalculationChange }) {
  return (
    <form onSubmit={e => { e.preventDefault(); }}>
      <input type="number" value={calculation} name="calculation" placeholder="Current Speed..." onChange={(e) => onCalculationChange(e.target.value)}/>
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

function DisplayCalculation({ value, times }) {
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
