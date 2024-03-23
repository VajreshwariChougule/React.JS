import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';

var userInputs = [];

function App() {
    const [initialInvestment, setInitialInvestment] = useState("");
    const [annualInvestment, setAnnualInvestment] = useState("");
    const [expectedReturn, setExpectedReturn] = useState("");
    const [duration, setDuration] = useState("");

    function handleInitialInvest(userInitialInvestment){
      setInitialInvestment(userInitialInvestment);
    }
    function handleAnnualInvest(userAnnualInvestment){
      setAnnualInvestment(userAnnualInvestment);
    }
    function handleExpected(userExpectedReturn){
      setExpectedReturn(userExpectedReturn);
    }
    function handleDura(userDuration){
      setDuration(userDuration)
    }

    let results = [...userInputs] //creating copy of userInputs array
    for(let i=0; i < (Number(duration)); i++)
    {
        var year = (i+1);
        var interest = Number(initialInvestment)* Number(expectedReturn)/100;
        var investmentValue = Number(initialInvestment)+ Number(annualInvestment)+ interest;
        var totalInterest = interest;
        var investedCapital = Number(initialInvestment)+ Number(annualInvestment);
        results.push({Year:year, Interest:interest, InvestmentValue:investmentValue, TotalInterest:totalInterest, Investedcapital:investedCapital})
    }
console.log(results)
  return (
    <div className="App">
      <Header/>
      <UserInput handleInitialInvest={handleInitialInvest} handleAnnualInvest={handleAnnualInvest} handleExpected={handleExpected} handleDura={handleDura} initialInvestmentValue={initialInvestment} annualInvestmentValue={annualInvestment} expectedReturnValue={expectedReturn} durationValue={duration}/>
      <Results finalResult={results} />
    </div>
  );
}

export default App;
