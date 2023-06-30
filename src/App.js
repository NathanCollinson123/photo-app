import './App.css';
import React from 'react';

function App() {

  const [calculation, setCalculation] = React.useState(0);


  return (
    <div className="App">
      <Input 
        calculation = {calculation}
        onCalculationChange = {setCalculation}
      />  
      <DisplayCalculation value={calculation} />
    </div>
  );
}

//get the input for the calulation from the user
function Input({ calculation, onCalculationChange }) {
  return (
    <form>
      <input type="number" value={calculation} name="calculation" onChange={(e) => onCalculationChange(e.target.value)}/>
    </form>
  );
}

function DisplayCalculation({ value }) {

  value = value * 2;
  return (
    <div>{value}</div>
  );
}



export default App;
