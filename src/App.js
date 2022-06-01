import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import WageForm from './components/WageForm';

function App() {
  const [income, setIncome] = useState([]);
  //Array of Incomes

  const [totalIncome, setTotalIncome] = useState(0);
  //Array of Incomes Total Incomes

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <WageForm income={income} setIncome={setIncome} />
      {income.length > 0 ? income[0].desc : ''}
    </div>
  );
}

export default App;
