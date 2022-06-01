import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import WageForm from './components/WageForm';
import IncList from './components/IncList';

function App() {
  const [income, setIncome] = useState([]);
  //Array of Incomes

  const [totalIncome, setTotalIncome] = useState(0);
  //Array of Incomes Total Incomes

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
      // Parse through every single income and add price up
    }

    setTotalIncome(temp);
  }, [income]);

  //Only process useEffect when it first starts and when income changes

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <WageForm income={income} setIncome={setIncome} />
      {/* {income.length > 0 ? income[0].desc : ''} */}
      <IncList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
